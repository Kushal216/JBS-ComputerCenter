import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import appwriteService from "../Appwrite/configuration";
import Input from "../Components/Input"; // assuming path
import RTE from "../Components/RTE"; // assuming path
import Button from "../Components/Button"; // assuming path

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        productId: post?.$id || "",
        productName: post?.productName || "",
        description: post?.description || "",
        price: post?.price || "",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const slugTransform = useCallback((value) => {
    return value
      ? value
          .trim()
          .toLowerCase()
          .replace(/[^a-zA-Z\d\s]+/g, "-")
          .replace(/\s/g, "-")
      : "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "productName") {
        setValue("ProductId", slugTransform(value.productName), {
          shouldValidate: true,
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  const submit = async (data) => {
    if (post) {
      let file;
      if (data.image[0]) {
        file = await appwriteService.updateProduct(data.image[0]);
        await appwriteService.deleteProduct(post.image);
      }
      const dbPost = await appwriteService.updateProduct(post.$id, {
        ...data,
        image: file ? file.$id : post.image,
      });
      if (dbPost) navigate(`/post/${dbPost.$id}`);
    } else {
      const file = await appwriteService.uploadProduct(data.image[0]);
      if (file) {
        const dbPost = await appwriteService.addProduct({
          ...data,
          image: file.$id,
          userId: userData?.$id,
        });
        if (dbPost) navigate(`/post/${dbPost.$id}`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap gap-4">
      {/* Left Section */}
      <div className="w-full md:w-2/3 px-2">
        <Input
          label="Product Name:"
          placeholder="Product Name"
          className="mb-4"
          {...register("productName", { required: true })}
        />

        <Input
          label="Product ID:"
          placeholder="Product ID"
          className="mb-4"
          {...register("productId", { required: true })}
        />

        <RTE
          label="Description:"
          name="description"
          control={control}
          defaultValue={getValues("description")}
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/3 px-2">
        <Input
          label="Featured Image:"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />

        {post?.image && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getProductPreview(post.image)}
              alt={post.productName}
              className="rounded-lg"
            />
          </div>
        )}

        <Input
          label="Price:"
          type="number"
          className="mb-4"
          {...register("price", { required: true })}
        />

        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : "bg-blue-600"}
          className="w-full"
        >
          {post ? "Update Product" : "Submit Product"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
