/* eslint-disable react/prop-types */
import React from "react";
import axios from "axios";

export default function Person() {
  const [showData, setShowData] = React.useState(false);
  const [data, setData] = React.useState({});
  const [submitedData, setSubmitedData] = React.useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: e.target.name.value,
      age: e.target.age.value,
      gender: e.target.gender.value,
    };
    // axios.post("http://localhost:3030/person", obj);
    axios
      .post("https://basic-express-server-side.herokuapp.com/person", obj)
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setSubmitedData(obj);
    setShowData(true);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <legend>
            <h4>Person Information</h4>
          </legend>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input type="number" className="form-control" id="age" />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <input type="text" className="form-control" id="gender" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {showData && (
        <div>
          <hr />
          <div>
            <h4>Submited Data</h4>
            <p>Name: {submitedData.name}</p>
            <p>Age: {submitedData.age}</p>
            <p>Gender: {submitedData.Gender}</p>
          </div>
          <hr />
          <div>
            <h4>Server Data</h4>
            {console.log(data)}
            <p>Modified Age: {data.age}</p>
          </div>
        </div>
      )}
    </div>
  );
}
