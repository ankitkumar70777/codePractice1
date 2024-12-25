import React, { useState, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, addPost, editPost, deletePost } from "../features/postSlice";
import "./css/createScreamEditStream.css";
import { CameraSvg } from "../svg/svgs";
import reducer, { initialState } from "../reducers";

const CreateScreamEditStream = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // console.log("state", state);

  // useEffect(() => {
  //   try {
  //     (async () => {
  //       const response = await fetch("http://localhost:3005/streams");
  //       const data = await response.json();
  //       dispatch({ type: "ADD_INITIAL_STATE_FROM_API", payload: [...data] });
  //     })();
  //   } catch (error) {
  //     console.log("err", error);
  //   }
  //   return () => {};
  // }, []);

  // delete item
  // const deleteItem = (i) => {
  //   dispatch({ type: "DELETE", payload: {id:i} });
  // }

  
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.posts);

  const [newPostTitle, setNewPostTitle] = useState("");
  const [title, setTitle] = useState("");

  const [discription, setDiscription] = useState("");

  const [editId, setEditId] = useState("");

  const [editTitle, setEditTitle] = useState("");

  const [editDiscription, setEditDiscription] = useState("");


  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleAddPost = (title, description,id) => {
    dispatch(addPost({ title: title, description: description, id: id }));
    setTitle("");
    setDiscription("");
  };

  const handleEditPost = (id) => {
      dispatch(
        editPost({
          id,
          updatedPost: { title: editTitle, description: editDiscription, id: editId },
        })
      );
  };

  const handleDeletePost = (id) => {
    dispatch(deletePost(id+1));
  };

  //UI state 'list', 'edit', 'add'
  const [currentState, setCurrentState] = useState("list");

  const submitForm = () => {
    handleAddPost(title, discription);
    setCurrentState('list');
  };
  const submitFormEdit = () => { 
    handleEditPost(editId);
    setCurrentState('list');
  }

  return (
    <div className='CreateOrEditStream'>
      {currentState === "list" ? (
        <div>
          <h1 className='ui header'>Streams</h1>
          <div className='StreamList'>
            {status === "succeeded" && items && Array.isArray(items) && items.length > 0 ? (
              items.map((item, i) => (
                <div className='singleStream' key={i}>
                  <div className='cameraAndTitle'>
                    <div>
                      <CameraSvg />
                    </div>
                    <div className='title'>
                      <p>{item.title}</p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div>
                    <button
                      className='ui button primary left floated'
                      onClick={() => {
                        setEditTitle(item.title);
                        setEditDiscription(item.description);
                        setEditId(item.id);
                        setCurrentState('edit');
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className='ui button red left floated'
                      onClick={() => {
                        handleDeletePost(i);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>No Data Found</div>
            )}
          </div>
          <div className='createScreams'>
            <button className='ui button primary left floated' onClick={() => {setCurrentState('add') }}>Create Stream</button>
          </div>
        </div>
      ) : null}

      {/* add streams */}
      {currentState === "add" ? (
        <div className='addStreamIntoDb'>
          <h1 className='ui header'>Create a Streams</h1>
          <form onSubmit={submitForm}>
            <div className='titleOfPage'>
              <p>Enter Title</p>
              <div class='ui fluid icon input'>
                <input
                  type='text'
                  placeholder='Exter title...'
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                />
              </div>
            </div>

            <div className='disriptionOfPage'>
              <p>Enter discription</p>
              <div class='ui fluid icon input'>
                <input
                  type='text'
                  placeholder='Exter discription...'
                  onChange={(e) => {
                    setDiscription(e.target.value);
                  }}
                  value={discription}
                />
                {/* <i class='search icon'></i> */}
              </div>
            </div>

            <div className='submitAddStream'>
              <button type='submit' className='ui button primary left floated'>
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : null}

      {/* edit streams */}
      {currentState === "edit" ? (
        <div className='addStreamIntoDb'>
          <h1 className='ui header'>Edit a Streams</h1>
          <form onSubmit={submitFormEdit}>
            <div className='titleOfPage'>
              <p>Enter Title</p>
              <div class='ui fluid icon input'>
                <input
                  type='text'
                  placeholder='Exter title...'
                  onChange={(e) => {
                    setEditTitle(e.target.value);
                  }}
                  value={editTitle ? editTitle : ""}
                />
              </div>
            </div>

            <div className='disriptionOfPage'>
              <p>Enter discription</p>
              <div class='ui fluid icon input'>
                <input
                  type='text'
                  placeholder='Exter discription...'
                  onChange={(e) => {
                    setEditDiscription(e.target.value);
                  }}
                  value={editDiscription ? editDiscription : ""}
                />
                {/* <i class='search icon'></i> */}
              </div>
            </div>

            <div className='submitAddStream'>
              <button type='submit' className='ui button primary left floated'>
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default CreateScreamEditStream;
