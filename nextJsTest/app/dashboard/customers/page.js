import { fetchUsers } from "../lib/fetchData";
import { notFound } from "next/navigation";

const Customers = async () => {
  const users = await fetchUsers();
  
  if (users.length <= 0) { 
    notFound()
  }

  return (
    <div>
      <h2>Customers</h2>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Customers;
