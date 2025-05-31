import React from "react";
import { Link, useParams } from "react-router";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";

const JobsApply = () => {
  const { id: jobId } = useParams();
  const { user } = UseAuth();
  console.log(jobId);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.title.value;
    const email = form.email.value;
    const author = form.author.value;

    const application = {
      jobId,
      applicant: user.email,
      name,
      email,
      author,
    };

    // send data in db
    axios.post('http://localhost:3000/applications',application)
    .then(res =>  {
        console.log(res.data);
        if(res.data.insertedId){
            alert("successfully")
        }
    }).catch(error => {
        console.log(error);
    })


  };

  return (
    <div>
      <h2 className="text-5xl">
        jobs Apply for this jobs:
        <Link to={`/jobs/${jobId}`}>Details</Link>
      </h2>

      <form onSubmit={handleSubmit} action="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Page details</legend>

          <label className="label">Title</label>
          <input
            name="title"
            type="text"
            className="input"
            placeholder="My awesome page"
          />

          <label className="label">email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="my-awesome-page"
          />

          <label className="label">Author</label>
          <input
            name="author"
            type="text"
            className="input"
            placeholder="Name"
          />
        </fieldset>
        <button className="btn" type="submit">Apply</button>
      </form>
    </div>
  );
};

 export default JobsApply ;
