/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import Swal from "sweetalert2";

const Newsletter = () => {
  const handleSubmitNews = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Thank you for subscribing to our newsletter",
      showConfirmButton: false,
      timer: 1500,
    });

    form.reset();
  };

  return (
    <div className=" mb-10 container mx-auto">
      <div className=" bg-zinc-700 md:flex rounded-md">
        <div className=" flex justify-center items-center">
          <img
            className=" w-[500px] p-8"
            src="https://i.ibb.co/FzHZgQ5/170.png"
            alt=""
          />
        </div>
        <div className=" bg-slate-200 w-full flex flex-col gap-3 justify-center p-10    ">
          <h1 className=" text-4xl font-bold">
            Loved this post? Join our Newsletter 🚀
          </h1>
          <p>
            We write blogs post related travel, technology, modern life,
            healthcard also about Next, vue flutter Automation. We don't spam
          </p>
          <div>
            <form onSubmit={handleSubmitNews} className=" flex flex-col gap-3">
              <input
                type="text"
                name="email"
                required
                placeholder="Email"
                className=" w-full py-3 border px-2 rounded-md"
              />
              <input
                type="Submit"
                defaultValue="Join with our Subscribers"
                readOnly
                className=" w-full py-3 bg-red-400 rounded-md text-white text-md"
              />
            </form>
          </div>
          <h1 className=" text-gray-500">
            By clicking submit button, you agree to our{" "}
            <span className=" text-red-400">privacy policy</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
