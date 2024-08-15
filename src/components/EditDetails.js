import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

function EditDetails() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    age: "",
    city: "",
    number: "",
  });

  let params = useParams();
  let navigate = useNavigate();

  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/details/update-details/" + params.id, {
        name: userForm.name,
        email: userForm.email,
        age: userForm.age,
        city: userForm.city,
        number: userForm.number,
      })
      .then((res) => {
        console.log({ status: res.status });
        navigate("/");
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/details/get-details/" + params.id)
      .then((res) => {
        setUserForm({
          name: res.data.data.name,
          email: res.data.data.email,
          age: res.data.data.age,
          city: res.data.data.city,
          number: res.data.data.number,
        });
      });
  }, []);

  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onUpdate}>
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditDetails;
