import React, { use } from "react";
import ApplicationsRows from "./ApplicationsRows";

const ApplicationList = ({ applicationsPromise }) => {
  const applications = use(applicationsPromise);

  return (
    <div>
      <h3 className="text-6xl">Jobs applied so far: {applications.length}</h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application ,index) => (
              <ApplicationsRows
                key={application._id}
                index={index}
                application={application}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
