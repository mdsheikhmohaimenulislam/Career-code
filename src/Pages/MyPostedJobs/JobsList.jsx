import React, { use } from "react";
import { Link } from "react-router";

const JobsList = ({ JobsCreatedByPromise }) => {
  const jobs = use(JobsCreatedByPromise);

  console.log(jobs);

  return (
    <div>
      <h2 className="text-4xl">Jobs Create by You: {jobs.length}</h2>

      <div>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {jobs.map((job, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{job.title}</td>
                  <td>{job.application_count}</td>
                  <td>{job.deadline}</td>
                  <td>
                    <Link to={`/applications/${job._id}`}>
                      View Application
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobsList;
