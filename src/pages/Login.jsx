import { Link } from 'react-router-dom';
import login1 from '../assets/Navbar/login.jpg';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    });
  }


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
      <form onSubmit={handleLogin} className="card-body">
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