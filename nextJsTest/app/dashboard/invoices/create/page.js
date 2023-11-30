import React from "react";
import { fetchUsers } from "../../lib/fetchData";
import Form from "./form";

const Create = async () => {
    const customers = await fetchUsers();


  return (
    <div>
      <p>Create</p>
          <Form customers={ customers} />
    </div>
  );
};

export default Create;
