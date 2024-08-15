import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CreateDetails() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    age: "",
    city: "",
    number: "",
  });

  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/details/create-details", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
          name: "",
          email: "",
          age: "",
          city: "",
          number: "",
        });
      });
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={userForm.name}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={userForm.email}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="text"
              className="form-control"
              name="age"
              id="age"
              value={userForm.age}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              id="city"
              value={userForm.city}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              name="number"
              id="number"
              value={userForm.number}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link
              style={{ marginLeft: "5px" }}
              className="btn btn-primary me-2"
              to="/"
            >
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateDetails;
