import React, { use } from 'react';
import LoginLottie from '../../assets/Login.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {

    const {handleLoginUser} = use(AuthContext)



    const handleLoginForm = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);


        // Login user 
        handleLoginUser(email,password)
        .then(result => {
            console.log(result);
        }).catch(error => {
            console.log(error);
        })
    }


    return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
            <Lottie className="w-110" animationData={LoginLottie} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login</h1>
            <form onSubmit={handleLoginForm} className="fieldset">
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
                Login
              </button>
            </form>
                <SocialLogin/>
          </div>
        </div>
      </div>

  
    </div>
    );
};

export default Login;