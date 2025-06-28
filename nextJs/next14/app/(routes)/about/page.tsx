
async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  }
  
  export default async function UsersPage() {
    const users = await getUsers();
  
      return (
        
      <div>
        <h1>Users (Server Component)</h1>
        <ul>
          {users.map((user: any) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
              </div>
              
    );
  }
  