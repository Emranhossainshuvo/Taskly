import { useContext } from "react";
import TaskManagementDashboard from "./TaskManagementDashboard";
import { AuthContext } from "../Providers/AuthProvider";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1 className="text-center my-10 text-3xl font-semibold">
        Welcome {user?.displayName}
      </h1>
      <Link to='/addtask'>
        <div className="h-12  w-[20%] mx-auto flex justify-center items-center bg-[#BEADFA] rounded-xl">
          <h1>Create a new task</h1>
          <GoPlus />
        </div>

        <div className="divider divider-neutral"></div>
      </Link>
      <TaskManagementDashboard></TaskManagementDashboard>
    </div>
  );
};

export default Dashboard;
