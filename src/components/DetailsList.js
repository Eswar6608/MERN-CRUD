import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function DetailsList() {
  const [userForm, setUserForm] = useState([]);

  const deleteStudent = (_id) => {
    axios
      .delete("http://localhost:4000/details/delete-details/" + _id)
      .then(() => {
        console.log("Data successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/details/")
      .then((res) => {
        setUserForm(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userForm]);

  return (
    <div>
      <div className="std-list">
        <h2>Person Details</h2>
        <Link className="btn btn-success btn-sm me-2" to="/create-details">
          Add
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">City</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userForm.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{user._id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.city}</td>
                <td>{user.number}</td>
                <td>
                  <Link
                    className="btn btn-primary btn-sm me-2"
                    to={"/edit-details/" + user._id}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteStudent(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DetailsList;
