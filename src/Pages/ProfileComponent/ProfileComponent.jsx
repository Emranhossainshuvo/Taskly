import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const ProfileComponent = () => {
    const {user} = useContext(AuthContext); 
  return (
    <div className="container mx-auto my-8 p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h1 className="text-4xl font-semibold mb-6 text-gray-800 dark:text-white">
        Welcome {user?.displayName}
      </h1>

      <div className="flex items-center space-x-4">
        <img
          src={user?.photoURL}
          alt="user Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            {user?.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
        </div>
      </div>

      <section className="mt-8">
        
        
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-600 dark:text-gray-400">Email</label>
            <p>{user?.email}</p>
          </div>
          <div>
            <label className="text-gray-600 dark:text-gray-400">Phone</label>
            <p>{user?.phone}</p>
          </div>
        </div>
      </section>

      {/* Add more sections for additional profile information as needed */}
    </div>
  );
};

export default ProfileComponent;
