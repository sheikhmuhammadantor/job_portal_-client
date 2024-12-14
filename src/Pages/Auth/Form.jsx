import Lottie from "lottie-react";
import Login from "../../assets/Login.json";
import Register from "../../assets/Register.json";

function Form({ type = null }) {
    return (
        <div className="hero bg-base-200 py-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left max-w-96 lg:max-w-[600px] ">
                    {
                        type === 'Login' ?
                            <Lottie animationData={Login}></Lottie> :
                            <Lottie animationData={Register}></Lottie>
                    }
                </div>
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <form className="card-body">
                        <h1 className="text-4xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
