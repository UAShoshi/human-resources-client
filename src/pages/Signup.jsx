import { Helmet } from "react-helmet-async";
import login2 from '../assets/Navbar/login.jpg';
import { Link } from "react-router-dom";



const Signup = () => {
  return (
    <div className="hero min-h-screen">
    <Helmet>
      <title>Human Resource | SignUp</title>
    </Helmet>
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <img className="w-2/3" src={login2} alt="" />
      </div>
      <div className="card shrink-0 w-full max-w-sm border border-base-300 bg-base-100">
        <form className="card-body">
          <h1 className="text-4xl font-bold text-center">Sign Up</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
            {/* {errors.name && <span className="text-red-600">Name is required.</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input type="text" placeholder="Your PhotoURL" className="input input-bordered" />
            {errors.name && <span className="text-red-600">PhotoURL is required.</span>} */}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="Your email" className="input input-bordered" />
            {/* {errors.email && <span className="text-red-600">Email is required.</span>} */}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password'  placeholder="Your password" className="input input-bordered" />
            {/* {errors.password?.type === 'required' &&
              <p className="text-red-600">password is required.</p>} */}
            {/* {errors.password?.type === 'minLength' &&
              <p className="text-red-600">password must be 6 characters.</p>}
            {errors.password?.type === 'maxLength' &&
              <p className="text-red-600">password must be less than 20 characters.</p>}
            {errors.password?.type === 'pattern' &&
              <p className="text-red-600">Password must have one uppercase one lowercase one number and special characters.</p>} */}
          </div>
          <div className="form-control mt-6">
            <input className="btn bg-[#FF902F] text-white" type="Submit" value="Sign up" />
          </div>
          {/* <SocialLogin></SocialLogin> */}
        </form>
        <p className="text-center text-[#FF902F]">Already registered? <Link to="/login" className="text-[#FF902F] font-semibold">Go to log in</Link></p>
      </div>
    </div>
  </div>
  );
};

export default Signup;