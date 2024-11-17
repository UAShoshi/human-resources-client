import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../component/SectionTitle";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";
import useAuth from "../../../hooks/useAuth";


const WorkSheet = () => {
  const { user } = useAuth();

  const [tasks, setTasks] = useState("Sales");
  const [hoursWorked, setHoursWorked] = useState(0);
  const [date, setDate] = useState(new Date());
  const [workEntries, setWorkEntries] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/workEntries')
    .then(res => res.json())
    .then(data => {
      setWorkEntries(data)})
      
  }, []);


  const handleTaskChange = (e) => setTasks(e.target.value);
  const handleHoursChange = (e) => setHoursWorked(Number(e.target.value));
  const handleDateChange = (date) => setDate(date.target.value);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data)

    const newEntry = {
      category: data.category,
      number: parseFloat(data.number),
      date: data.date
    };
    fetch('http://localhost:5000/workEntries', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newEntry)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.insertedId) {
          reset();
          Swal.fire({
            title: 'Good Luck !!!',
            text: 'Services added successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }
      })
  };


  return (
    <div className="mb-10">
      <Helmet>
        <title>Human Resource | WorkSheet</title>
      </Helmet>
      <SectionTitle
        heading={'Work Sheet'}
        subHeading={'This worksheet is designed to track and organize tasks, deadlines, and responsibilities for team members.'}
      ></SectionTitle>
      <form className="ml-10" onSubmit={handleSubmit(onSubmit)} onChange={handleTaskChange}>
        <div className="flex justify-around gap-5 w-full py-10">
          <select defaultValue="dafault" {...register("category", {required: true})} className="ml-8 select select-bordered w-full">
            <option value="Sales">Sales</option>
            <option value="Support">Support</option>
            <option value="Content">Content</option>
            <option value="Paper-work">Paper-work</option>
          </select>

          {/* input */}
          <input type="number"
          {...register("number", {required: true})}
            value={hoursWorked}
            onChange={handleHoursChange}
            placeholder="Hours Worked"
            min="0" className="input input-bordered w-full" />

          {/* Date picker */}
          <input type="date" name="date" value={date} id="" {...register("date", {required: true})} onChange={handleDateChange} />
          {/* <DatePicker type="date" value={date} selected={date} {...register("date", {required: true})} onChange={handleDateChange} /> */}
        </div>

        {/* Submit */}
        <div className="flex justify-center items-center">
          <button className="btn btn-wide mt-5 hover:bg-[#F9531D] text-white bg-[#FF902F] border-none" type="submit">Submit</button>
        </div>
      </form>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table w-full mt-10">
          {/* head */}
          <thead>
            <tr className="bg-[#F9531D] text-white">
              <th></th>
              <th>Task</th>
              <th>Hours Worked</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {workEntries.map((data, index) => <tr key={data._id}>
            <th>{index + 1}</th>
              <td>{data.category}</td>
              <td>{data.number}</td>
              <td>{data.date}</td>
            </tr>)
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkSheet;