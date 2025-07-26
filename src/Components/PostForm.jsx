import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import firebaseService from "../Firebase/configuration";
import Input from "../Components/Input"; // Adjust import paths as needed
import RTE from "../Components/RTE";
import Button from "../Components/Button";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        productName: post?.productName || "",
        productId: post?.id || "", // Firebase doc ID
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
        setValue("productId", slugTransform(value.productName), {
          shouldValidate: true,
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  const submit = async (data) => {
    try {
      if (post) {
        let fileUrl = post.image;

        if (data.image && data.image[0]) {
          fileUrl = await firebaseService.uploadProduct(data.image[0]);
          if (post.image) {
            await firebaseService.removeProduct(post.image);
          }
        }

        const updated = await firebaseService.updateProduct(post.id, {
          productName: data.productName,
          productId: data.productId,
          description: data.description,
          price: Number(data.price),
          image: fileUrl,
        });

        if (updated) {
          navigate(`/post/${post.id}`);
        }
      } else {
        if (data.image && data.image[0]) {
          const fileUrl = await firebaseService.uploadProduct(data.image[0]);
          const newDocId = await firebaseService.addProduct({
            productName: data.productName,
            productId: data.productId,
            description: data.description,
            price: Number(data.price),
            image: fileUrl,
            userId: userData?.uid,
          });

          if (newDocId) {
            navigate(`/post/${newDocId}`);
          }
        }
      }
    } catch (error) {
      console.error("Submit product error:", error);
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
              src={post.image}
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
