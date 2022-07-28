import React from "react";

const PostId = ({ post }) => {
  return (
    <>
      <div>PostId</div>
      <p>{post.body}</p>
    </>
  );
};

export default PostId;

//getStaticProps receives argument, can be called as convention as "comntext"
//context is an object contain params object
export async function getStaticProps(context) {
  console.log("context", context);
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}
