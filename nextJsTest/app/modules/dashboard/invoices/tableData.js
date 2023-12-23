import React from "react";
import { fetchPosts } from "../lib/fetchData";

const TableData = async ({ query}) => {
  const posts = await fetchPosts(query);

  return (
    <tbody>
      {posts.map((post) => {
        return (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableData;
