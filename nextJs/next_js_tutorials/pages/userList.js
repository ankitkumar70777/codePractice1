/*generating html after fetching some data

in nextjs when you export component you can also export function "getStaticProps"
when you export "getStaticProps" it will run during built time and 
inside function you can fetch external data and send as props to your component

if you do view source of this component you will find all html element present 

*/

import React from "react";

//this user are came from  getStaticProps function
const GetUserList = ({ users }) => {
  return (
    <>
      <h1>List Of Users</h1>
      {users.length > 0
        ? users.map((v, i) => <p key={v.id}>{v.name}</p>)
        : null}
    </>
  );
};

export default GetUserList;

export async function getStaticProps() {
  // we can make api req here
  //remember to add await to both fetch and json() fuction
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  //we can pass data returned from api to component as props
  //return must be as object whihc contain props property as object
  return {
    props: {
      users,
    },
  };
}
