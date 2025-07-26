import React, { useState, useEffect } from "react";
import Container from "../Components/Container/container";
import PostCard from "../Components/Post/PostCard";
import firebaseService from "../service"; // Adjust path to your firebase service file

function AllProducts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all products from Firestore
    firebaseService.getAllProducts().then((products) => {
      if (products) {
        setPosts(products);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap -mx-2">
          {posts.map((post) => (
            <div
              key={post.id} // Firestore document ID
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllProducts;
