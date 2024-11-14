import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../component/SectionTitle";
import DatePicker from "react-datepicker";
import { useState } from "react";
import axios from "axios";


const WorkSheet = () => {
  const [tasks, setTasks] = useState('Sales');
  const [hoursWorked, setHoursWorked] = useState(0);
  const [date, setDate] = useState(new Date());
  const [workEntries, setWorkEntries] = useState([]);


  const handleTaskChange = (e) => {
    setTasks(e.target.value);
  };
  const handleHoursChange = (e) => {
    setHoursWorked(e.target.value);
  };
  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEntry = {
      tasks,
      hoursWorked,
      date
    };

    try {
      const res = await axios.post('/', newEntry);
      setWorkEntries([res.data, ...workEntries]);
    } catch (error) {
      console.error('Error adding work entry:', error);
      
    }
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
      <form onSubmit={handleSubmit}>
        <div className="flex justify-around gap-5 w-full py-10">
          <select value={tasks} className="ml-8 select select-bordered w-full">
            <option value="Sales">Sales</option>
            <option value="Support">Support</option>
            <option value="Content">Content</option>
            <option value="Paper-work">Paper-work</option>
          </select>

          {/* input */}
          <input type="number"
            value={hoursWorked}
            onChange={handleHoursChange}
            placeholder="Hours Worked"
            min="0" className="input input-bordered w-full" />

          {/* Date picker */}
          <DatePicker selected={date} onChange={handleDateChange} />
        </div>

        {/* Submit */}
        <div className="flex justify-center items-center">
          <button className="btn btn-wide mt-5" type="submit">Add / Submit</button>
        </div>
      </form>
    </div>
  );
};

export default WorkSheet;