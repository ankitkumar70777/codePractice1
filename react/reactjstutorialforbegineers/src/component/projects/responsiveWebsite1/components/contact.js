import React, { useState } from "react";
import "./contact.css";

function Contact() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    country: "",
  });

  const setDataInData = (event) => {
    const { name, value } = event.target;
    setData((prevVal) => {
      console.log("prevVal--", prevVal);
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };

  console.log("data", data);

  const submitFormData = (e) => {
    e.preventDefault();

    alert(`${data.firstname} ${data.lastname} ${data.country}`);
  };

  return (
    <div>
      <h1 className="contactHeading">Contact Us</h1>

      <div className="container">
        <form onSubmit={submitFormData}>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">First Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
                value={data.firstname}
                onChange={(e) => {
                  setDataInData(e);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Last Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
                value={data.lastname}
                onChange={(e) => {
                  setDataInData(e);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="country">Country</label>
            </div>
            <div className="col-75">
              <select
                id="country"
                name="country"
                value={data.country}
                onChange={(e) => {
                  setDataInData(e);
                }}
              >
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
            </div>
          </div>

          <br />
          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
