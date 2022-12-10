import React from "react";
import Link from "next/link";

const PostMain = (props) => {
  const { posts } = props;

  return (
    <div>
      {posts.map((post, i) => (
        <p key={i} >
          <Link href={`/posts/${i}`}>
            <a><span>{post.id} : </span>{post.title}</a>
          </Link>
        </p>
      ))}
    </div>
  );
};

export const getStaticProps = async (context) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts: posts.slice(0,3),
    },
  };
};
export default PostMain;
