import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const { createUser, googleSignIn, } = useContext(AuthContext);
  
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
    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
        <div data-aos="fade-up" className="card w-full max-w-md shadow-2xl bg-base-200 rounded-lg overflow-hidden">
          <div className="card-body p-6">
            <h2 className="text-3xl font-bold mb-4 text-primary">Register</h2>

            {/* Name field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-secondary">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Your name"
                className="input input-bordered"
              />
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Email field */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text text-secondary">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="input input-bordered"
              />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Password field */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text text-secondary">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                placeholder="Password"
                className="input input-bordered"
              />
              {errors.password?.type === "minlength" && (
                <p className="text-red-500">Password must contain 6 letters</p>
              )}
              {errors.password && <span className="text-red-500">This field is required</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Register button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full" onClick={handleSubmit(onSubmit)}>
                Register
              </button>
            </div>

            {/* Google and GitHub login buttons */}
            <div className="flex items-center justify-between mt-4">
              <button onClick={handleGoogle} className="btn btn-secondary">
                <i className="fab fa-google mr-2"></i> Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
