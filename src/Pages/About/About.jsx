const AboutPage = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h1 className="text-4xl font-semibold mb-6 text-gray-800 dark:text-white">
        About Us
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
        Welcome to the About Us page of Taskly, where we believe in making
        productivity simpler and more accessible. Our journey started with a
        vision to create a platform that helps individuals and teams achieve
        their goals efficiently.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        Our Mission
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Our mission is to empower individuals and teams to streamline their
        workflow, collaborate seamlessly, and achieve their objectives with
        ease. We strive to provide user-friendly tools and a positive user
        experience.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        Our Values
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6">
        <li>
          <strong>Innovation:</strong> We embrace creativity and continuously
          seek innovative solutions.
        </li>
        <li>
          <strong>Collaboration:</strong> Teamwork is at the heart of what we
          do; we believe in the power of collaboration.
        </li>
        <li>
          <strong>User-Centric:</strong> Users are our top priority, and we
          design our products with their needs in mind.
        </li>
        <li>
          <strong>Reliability:</strong> We strive to deliver reliable and
          high-quality products that our users can depend on.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Team member 1 */}
        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <img
            alt="Team Member 1"
            className="w-full h-40 object-cover mb-4 rounded-md"
          />
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            John Doe
          </h3>
          <p className="text-gray-600 dark:text-gray-400">CEO & Co-Founder</p>
        </div>

        {/* Team member 2 */}
        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <img
            alt="Team Member 2"
            className="w-full h-40 object-cover mb-4 rounded-md"
          />
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Jane Smith
          </h3>
          <p className="text-gray-600 dark:text-gray-400">CTO & Co-Founder</p>
        </div>

        {/* Team member 3 */}
        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <img
            alt="Team Member 3"
            className="w-full h-40 object-cover mb-4 rounded-md"
          />
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Alice Johnson
          </h3>
          <p className="text-gray-600 dark:text-gray-400">Lead Developer</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        Contact Us
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Have questions or want to get in touch? Feel free to reach out to us at{" "}
        <a href="mailto:info@taskly.com" className="text-blue-500">
          info@taskly.com
        </a>
        .
      </p>
    </div>
  );
};

export default AboutPage;
