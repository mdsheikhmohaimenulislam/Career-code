import React, { use } from "react";
import registerLottie from "../../assets/Animation - 1748256560461.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";

const Register = () => {
  const { handleRegister } = use(AuthContext);




  const handleRegisterForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);




    // Create Register User
    handleRegister(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie className="w-70" animationData={registerLottie}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register</h1>
            <form onSubmit={handleRegisterForm} className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </form>
            <SocialLogin/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
