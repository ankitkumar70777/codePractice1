// fetch data and cache for 60 second
const getStudentData = async (id: string) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/ok/${id}`, {
      next: { revalidate: 60 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error",error);
    // return {};
  }
};

// dynamically generate metadata
export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getStudentData(params.id);

  return {
    title: post.title,
    description: post.body,
  };
}

// server side rendering
export default async function StudentPage({ params }: { params: { id: string } }) {
  const post = await getStudentData(params.id);
  console.log("post",post);


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Student Data {post.id}</h1>
      <p className="font-semibold mb-2">Title: {post.title}</p>
      <p>Body: {post.body}</p>
    </div>
  );
}
