import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import profilePic from "../../media/images/slideShowImages/1.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [submit, setSubmit] = useState({
    name: "",
    phone: "",
    email: "",
    about: "",
  });

  useEffect(() => {
    axios
      .post("https://dummyAPI.com", { data: submit })
      .then((response) => {
        console.log({ response });
      })
      .catch((error) => {
        console.log(error);
      });
    //motoring submit button
  }, [submit]);

  console.log({ name }, { phone }, { email }, { about }, { submit });

  //stop page to refresh when submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //handling validation
    if (name === "" || phone === "" || email === "" || about === "") {
      console.log("error------------,please fill in the black");
    }
    setSubmit({
      name: name,
      phone: phone,
      email: email,
      about: about,
    });
  };

  return (
    <div>
      <div className='container'>
        <h1>Edit Profile</h1>
        <p>
          <img src={profilePic} alt='profileImage' />
        </p>
        <form>
          <p>
            name{" "}
            <input
              type='text'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </p>
          <p>
            phone{" "}
            <input
              type='phone'
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              required
            />
          </p>
          <p>
            email{" "}
            <input
              type='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </p>
          <p>
            about{" "}
            <input
              type='text'
              value={about}
              onChange={(e) => {
                setAbout(e.target.value);
              }}
              required
            />
          </p>
          <button type='submit' onClick={handleSubmit}>
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
