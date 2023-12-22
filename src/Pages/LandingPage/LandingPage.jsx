import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <div data-aos="fade-up"
      className="bg-cover bg-center my-20 h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://i.ibb.co/HhwFyBz/i-can-handle-multi-tasks-cropped-shot-successful-girl-typing-keyboard-making-notes-while-looking-com.jpg")',
        opacity: 0.8,
      }}
    >
      <div
        
        className="max-w-2xl bg-white p-8 shadow-md rounded-md"
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to SCC Technovision Inc.
        </h1>
        <p className="text-gray-600 mb-8">
          We build collaborative task management platforms to enhance your
          productivity.
        </p>
        <Link to="/register">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Let's Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
