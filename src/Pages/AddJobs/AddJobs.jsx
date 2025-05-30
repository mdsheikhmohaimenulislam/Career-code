import React from "react";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";

const AddJobs = () => {
  const { user } = UseAuth();

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Process Salary range data
    const { min, max, currency, ...newJobs } = data;
    newJobs.salaryRange = {
      min,
      max,
      currency,
    };

    //* Process Jobs Requirements
    // newJobs.requirements = newJobs.requirements
    //   .split(",")
    //   .map((req) => req.trim());
    // console.log(newJobs);

    const requirementsString = newJobs.requirements;
    const requirementsSplit = requirementsString.split(",");
    const requirementsTrim = requirementsSplit.map((req) => req.trim());
    newJobs.requirements = requirementsTrim;

    //* Process Jobs Responsibilities
    newJobs.responsibilities = newJobs.responsibilities
      .split(",")
      .map((res) => res.trim());

    newJobs.status = "active";

    // Save to the database
    axios
      .post('http://localhost:3000/jobs', newJobs)
      .then((res) => {
        if(res.data.insertedId){
            alert("jobs post add to database")
        }
      })
      .catch((error) => console.log(error));

    console.log(newJobs);
  };

  return (
    <div>
      <h2>Please Add a Job</h2>
      <form onSubmit={handleAddJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          {/* Job title */}
          <label className="label">Job Title</label>
          <input
            type="text"
            className="input"
            name="title"
            placeholder="Job title"
          />
          {/* Company */}
          <label className="label">Company</label>
          <input
            type="text"
            className="input"
            name="company"
            placeholder="Company name"
          />
          {/* Company Location */}
          <label className="label">Location</label>
          <input
            type="text"
            name="Location"
            className="input"
            placeholder="company location"
          />
          {/* company Logo */}
          <label className="label">Company Logo</label>
          <input
            type="text"
            className="input"
            name="company_logo"
            placeholder="Company Logo UTL"
          />
        </fieldset>
        {/* Job type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job type</legend>
          <fieldset className="filter">
            <input
              className="btn btn-square"
              name="jobType"
              type="reset"
              value="×"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="On-Site"
              value="On-Site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
              value="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
              value="Hybrid"
            />
          </fieldset>
        </fieldset>

        {/* Job category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Category</legend>

          <select
            defaultValue="Job Category"
            name="category"
            className="select"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* Application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>

          <input type="date" name="date" className="input" />

          {/* Salary Range */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Salary Range</legend>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="label">Minimum Salary</label>
                <input
                  type="text"
                  className="input"
                  name="min"
                  placeholder="Minimum Salary"
                />
              </div>

              <div>
                <label className="label">Maximum Salary</label>
                <input
                  type="text"
                  className="input"
                  name="max"
                  placeholder="Maximum Salary"
                />
              </div>

              <div>
                {" "}
                <label className="label">Currency</label>
                <select
                  defaultValue="Select a Currency"
                  name="currency"
                  className="select"
                >
                  <option disabled={true}>Select a Currency</option>
                  <option>BDT</option>
                  <option>USD</option>
                  <option>EU</option>
                </select>
              </div>
            </div>
          </fieldset>
        </fieldset>

        {/* Job Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Description </legend>
          <textarea
            className="textarea"
            name="Job Description"
            placeholder="Description "
          ></textarea>
        </fieldset>
        {/* Job Requirement  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Requirement</legend>
          <textarea
            className="textarea"
            name="requirements"
            placeholder="Job Requirement (separate by comma)"
          ></textarea>
        </fieldset>
        {/* Job Responsibilities  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            className="textarea"
            name="responsibilities"
            placeholder="Job Responsibilities (separate by comma)"
          ></textarea>
        </fieldset>
        {/* HR Related Info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">HR Related Info</legend>

          {/* HR Name */}
          <label className="label">HR Name</label>
          <input
            type="text"
            className="input"
            name="hr_name"
            defaultValue={user.displayName}
            readOnly
            placeholder="HR Name"
          />
          {/* HR Email */}
          <label className="label">HR Email</label>
          <input
            type="text"
            className="input"
            defaultValue={user.email}
            readOnly
            name="hr_email"
            placeholder="HR Email"
          />
        </fieldset>
        <input type="submit" value="Add Job" />
      </form>
    </div>
  );
};

export default AddJobs;
