import React from "react";

const iPost = ({ singlePost }) => {
  return (
    <div>
      <p>
        <span>{singlePost.id}</span> &nbsp; {singlePost.title}
      </p>
      <p>{singlePost.body}</p>
    </div>
  );
};

export const getStaticPaths = async (context) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  //array of path
  const path = data.map((post, i) => {
    return { params: { postId: `${post.id}` } };
  });

  return {
    paths: [
      { params: { postId: `${0}` } },
      { params: { postId: `${1}` } },
      { params: { postId: `${2}` } },
      { params: { postId: `${3}` } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const postId = context.params.postId;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const singlePost = await response.json();

  return {
    props: { singlePost: singlePost },
  };
};

export default iPost;
