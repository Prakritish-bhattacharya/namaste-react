const Contactus = () => {
  return (
    <div className="contactus">
      <h1 className="font-bold text-3xl p-4 m-4 ">Contact Us</h1>
      <p>
        If you have any questions or inquiries, please feel free to reach out to
        us. We are here to assist you and provide the information you need.
      </p>
      <p>Email: info@company.com</p>
      <form>
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded-md p-2 m-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded-md p-2 m-2"
        />
        <textarea
          placeholder="Your Message"
          className="border border-gray-300 rounded-md p-2 m-2"></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contactus;
