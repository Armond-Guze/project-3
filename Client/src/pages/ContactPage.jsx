import React from 'react';

function ContactPage() {
  return (
    <div className="container mx-auto h-screen flex justify-center items-center px-4" style={{ marginTop: "-10vh" }}> {/* Updated inline style */}
      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-400">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">Contact Us</h1>
        <p className="text-lg mb-4 text-gray-700">
          You can reach out to us or check out our GitHub profiles for more information:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li className="text-lg mb-4 text-gray-700">
            <a href="https://github.com/Armond-Guze" className="text-blue-500 hover:underline">@Armond-Guze</a> on GitHub
          </li>
          <li className="text-lg mb-4 text-gray-700">
            <a href="https://github.com/GxUniverse" className="text-blue-500 hover:underline">@GxUniverse</a> on GitHub
          </li>
          <li className="text-lg mb-4 text-gray-700">
            <a href="https://github.com/shumaela" className="text-blue-500 hover:underline">@shumaela</a> on GitHub
          </li>
        </ul>
        <p className="text-lg mb-4 text-gray-700">
          Feel free to contact any of us for inquiries, feedback, or collaboration opportunities.
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
