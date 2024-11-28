
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../component/SectionTitle";



const PaymentHistory = () => {

  

  return (
    <div className="mb-10">
      <Helmet>
        <title>Human Resource | PaymentHistory</title>
      </Helmet>
      <SectionTitle
        heading={'PAYMENT HISTORY'}
        subHeading={'The Payment History section tracks all transactions, showing dates, amounts, and statuses.'}
      ></SectionTitle>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table w-full mt-10">
          {/* head */}
          <thead>
            <tr className="bg-[#F9531D] text-white">
              <th></th>
              <th>Month</th>
              <th>Amount</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;