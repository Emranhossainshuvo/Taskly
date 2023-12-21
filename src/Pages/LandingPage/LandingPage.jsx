
const LandingPage = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="max-w-2xl bg-white p-8 shadow-md rounded-md">
        <h1 className="text-4xl font-bold mb-4">Welcome to SCC Technovision Inc.</h1>
        <p className="text-gray-600 mb-8">
          We build collaborative task management platforms to enhance your productivity.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => {
            // Handle "Let's Explore" button click, e.g., navigate to login page
            console.log("Let's Explore clicked!");
          }}
        >
          Let's Explore
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
