import { env } from "../../../config/constants";
import z from "zod";

export const fetchUsers = async () => {
  const users = [];
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    users.push(...data);
    return users;
  } catch (error) {
    if (env === "development") {
      console.error("error while fetching users", error.message);
    }
    return users;
  }
};

export const fetchPosts = async (query = null) => {
  const posts = [];
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const only10Data =
      data && Array.isArray(data) && data.length > 0
        ? data.filter((post) => {
            return post.id <= 10;
          })
        : [];
    if (query) {
      const filteronly10Data = only10Data.filter((post) => {
        return post.title?.includes(query);
      });
      posts.push(...filteronly10Data);
      return posts;
    }
    posts.push(...only10Data);
    return posts;
  } catch (error) {
    if (env === "development") {
      console.error("error while fetching posts", error.message);
    }
    return posts;
  }
};

export const createInvoice = async (query = null) => {
  const posts = [];
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const only10Data =
      data && Array.isArray(data) && data.length > 0
        ? data.filter((post) => {
            return post.id <= 10;
          })
        : [];
    if (query) {
      const filteronly10Data = only10Data.filter((post) => {
        return post.title?.includes(query);
      });
      posts.push(...filteronly10Data);
      return posts;
    }
    posts.push(...only10Data);
    return posts;
  } catch (error) {
    if (env === "development") {
      console.error("error while fetching posts", error.message);
    }
    return posts;
  }
};

const FormSchema = z.object({
  title: z.string().min(2, { message: "short title" }).max(20),
  body: z.string().min(2, { message: "short body" }).max(20),
  userId: z.string(),
});

export const createSource = async (prevState, formData) => {
  try {
    const formPayload = Object.fromEntries(formData);
    // Validate form fields using Zod
    const validatedFields = FormSchema.omit({ submit: true }).safeParse(formPayload);
    console.log('validatedFields', validatedFields);
    
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create Invoice.',
      };
    }
    
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: JSON.stringify(validatedFields),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // });
    // const data = await res.json();
    // console.log('data', data);
    
  } catch (error) {
    if (env === "development") {
      console.error("error while fetching posts", error.message);
    }
    // return posts;
  }
};
