import { Link } from 'react-router-dom';
import login1 from '../assets/Navbar/login.jpg';
import { Helmet } from 'react-helmet-async';


const Login = () => {
  return (
    <div className="hero min-h-screen">
    <Helmet>
      <title>Human Resource | LogIn</title>
    </Helmet>
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img className="w-2/3" src={login1} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm border border-base-300 bg-base-100">
      <form className="card-body">
      <h1 className="text-4xl font-bold text-center">Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
        </div>
        {/* <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="Type the captcha above" className="input input-bordered" required />
        </div> */}
        <div className="form-control mt-6">
          <input className="btn bg-[#FF902F] text-white" type="Submit" value="Sign In" />
        </div>
        {/* <SocialLogin></SocialLogin> */}
      </form>
      <p className="text-center text-[#FF902F]">New here? <Link to="/signup" className="text-[#FF902F] font-semibold">Create a New Account</Link></p>
    </div>
  </div>
</div>
  );
};

export default Login;