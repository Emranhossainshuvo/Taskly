
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">Error!</h2>
        <p className="text-gray-600">Oops! Something went wrong. Please try again later.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
