import React from "react";
import Link from "next/link";

const PostsSSG = ({ posts }) => {
  //   console.log("posts", { posts });

  return (
    <>
      <div>PostsSSG</div>
      {posts.map((v, i) => (
        <div key={i}>
          {/* when we have child that is not <a> tag add passHref  */}
          
          <Link href={`posts/${v.id}`} passHref>
            <p>{v.title}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default PostsSSG;

export async function getStaticProps() {
  // https://jsonplaceholder.typicode.com/posts
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: { posts: data.slice(0, 3) },
  };
}
