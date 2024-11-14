import { useState } from "react";
import { Helmet } from "react-helmet-async";



const PaymentHistory = () => {

  const [workEntries, setWorkEntries] = useState([]);

  return (
    <div className="mb-10">
      <Helmet>
        <title>Human Resource | PaymentHistory</title>
      </Helmet>
       {/* Table */}
       <div className="overflow-x-auto">
        <table className="table w-full mt-10">
          {/* head */}
          <thead>
            <tr className="bg-base-200">
              <th></th>
              <th>Task</th>
              <th>Hours Worked</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;