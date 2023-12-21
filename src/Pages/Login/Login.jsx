import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn, googleSignIn } = useContext(AuthContext);

  const handleGoogle = () => {
    googleSignIn()
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
        <div className="card w-full max-w-md shadow-2xl bg-base-200 rounded-lg overflow-hidden">
          <div className="card-body p-6">
            <h2 className="text-3xl font-bold mb-4 text-primary">Login</h2>

            {/* Email field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-secondary">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>

            {/* Password field */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text text-secondary">Password</span>
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Login button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full" onClick={handleSubmit(onSubmit)}>
                Login
              </button>
            </div>

            {/* Google and GitHub login buttons */}
            <div className="flex items-center justify-between mt-4">
              <button onClick={handleGoogle} className="btn btn-secondary">
                <i className="fab fa-google mr-2"></i> Google
              </button>
              <button className="btn btn-gray">
                <i className="fab fa-github mr-2"></i> GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
