import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();


//!   modifiedCount didn't working

  const handleUpdate = (e, job_id) => {
    axios.patch(`http://localhost:3000/applications/${job_id}`,{status: e.target.value})
    .then(res => {
        console.log(res.data);
    }).catch(error => {
        console.log(error);
    })
  }


  return (
    <div>
      <h2 className="text-4xl">
        {applications.length} Application For: {job_id}
      </h2>

      <div>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>email</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              <tr>
                <th>1</th>
                <td>{applications.title}</td>
                <td>{applications.hr_email}</td>
                <td>
                  <select onChange={e => handleUpdate(e,job_id)} defaultValue={applications.status} className="select">
                    <option disabled={true}>Update status</option>
                    <option>Under review</option>
                    <option>Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewApplications;
