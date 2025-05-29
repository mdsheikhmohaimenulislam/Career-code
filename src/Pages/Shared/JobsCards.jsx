import React from "react";
import { LuMapPin } from "react-icons/lu";
import { Link } from "react-router";

const JobsCards = ({ job }) => {
  const {
    title,
    location,
    requirements,

    _id,

    salaryRange,
    description,
    company,
    company_logo,
  } = job || {};

  return (
    <div className="card bg-base-100  shadow-sm">
      <div className="flex">
        <div>
          <figure>
            <img src={company_logo} alt="Shoes" />
          </figure>
        </div>
        <div>
          <h3 className="text-4xl">{company}</h3>
          <p className="flex items-center gap-2">
            {" "}
            <LuMapPin />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          Salary: {salaryRange.min} - {salaryRange.max}
        </p>
        <p>{description}</p>
        <div className="grid grid-cols-2 gap-5">
          {requirements.map((skill, index) => (
            <div key={index}>{skill}</div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`}>
            {" "}
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCards;
