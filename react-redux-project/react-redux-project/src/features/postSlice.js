// src/features/postsSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API base URL
const API_URL = "http://localhost:3005/streams";

// Async thunk to fetch posts initially
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return await response.json();
});

// Async thunk to add a new post
export const addPost = createAsyncThunk("posts", async (newPost) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });
  if (!response.ok) {
    throw new Error("Failed to add post");
  }
  return await response.json();
});

// Async thunk to edit an existing post
export const editPost = createAsyncThunk("posts/:updatedId", async ({ id, updatedPost }) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedPost),
  });
  if (!response.ok) {
    throw new Error("Failed to edit post");
  }
  return await response.json();
});

// Async thunk to delete a post
export const deletePost = createAsyncThunk("posts/:id", async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete post");
  }
  return id;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},

  // Handle async actions in extraReducers
  extraReducers: (builder) => {
    builder
      // Fetch posts
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Add post
      .addCase(addPost.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      // Edit post
      .addCase(editPost.fulfilled, (state, action) => {
        const index = state.items.findIndex((post) => post.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })

      // Delete post
      .addCase(deletePost.fulfilled, (state, action) => {
        state.items = state.items.filter((post) => post.id !== action.payload);
      });
  },
});

export default postsSlice.reducer;
