import React from 'react';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <div className="mt-8 grid grid-cols-1 mb-20 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <FeatureCard
        title="User Authentication"
        description="Securely log in, register, and log out from the website."
        icon={<i className="fas fa-user-lock text-3xl text-blue-500"></i>}
      />

      <FeatureCard
        title="Task Management"
        description="Efficiently create, edit, and delete tasks with priority and deadlines."
        icon={<i className="fas fa-tasks text-3xl text-green-500"></i>}
      />

      <FeatureCard
        title="User Profiles"
        description="Customize your profile with a profile picture and view task details."
        icon={<i className="fas fa-user-circle text-3xl text-purple-500"></i>}
      />

      <FeatureCard
        title="Google Sign-In"
        description="Easily sign in using Google credentials for seamless access."
        icon={<i className="fab fa-google text-3xl text-red-500"></i>}
      />

      <FeatureCard
        title="Drag-and-Drop"
        description="Intuitive drag-and-drop functionality for task organization."
        icon={<i className="fas fa-mouse-pointer text-3xl text-orange-500"></i>}
      />

      <FeatureCard
        title="Notifications"
        description="Stay informed with toast notifications for task updates and deadlines."
        icon={<i className="fas fa-bell text-3xl text-indigo-500"></i>}
      />
    </div>
  );
};

export default FeatureSection;
