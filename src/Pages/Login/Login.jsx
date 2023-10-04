import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      
      <div className="mx-auto rounded-[5px] card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <h2 className="text-[30px] text-center font-semibold m-12 mb-0 pb-8 border-b-2">Login your account</h2>
        <form className="card-body px-12">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[18px] text-[#403F3F] font-semibold">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[18px] text-[#403F3F] font-semibold">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-4">
            <button className="btn bg-[#403F3F] text-[#FFF] hover:bg-[#403F3F] rounded-[5px]">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
