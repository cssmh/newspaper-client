const ContactUs = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center mt-10 w-[90%]  max-w-7xl">
        <div className="flex flex-col justify-center items-center md:items-start my-6">
          <div className="text-xl md:text-3xl text-blue-900 font-bold uppercase">
            Contact Us
          </div>
          <div className="text-sm md:text-xl text-blue-900 font-medium">
            We are here to help.
          </div>
        </div>
        <div className="flex   flex-col justify-center items-center lg:flex-row ">
          <div className="bg-gray-200 shadow-lg flex flex-col justify-center rounded-lg items-center py-4 h-56 md:w-[80%] lg:w-fit  my-6 mx-2">
            <div className="-mt-10 ">
              <ion-icon
                name="call-outline"
                className="text-3xl md:text-5xl rounded-full p-4 bg-white text-white -mt-8"
              ></ion-icon>
            </div>
            <div className="flex flex-col items-start px-8 text-blue-900">
              <div className="font-semibold text-2xl m-1">Call Us</div>
              <p className="  text-lg  m-1">
                Call us to solve your queries at any time.
              </p>
              <p className="  text-lg  m-1">+1 255-8997-469</p>
            </div>
          </div>
          <div className="bg-gray-200 shadow-lg flex flex-col justify-center rounded-lg items-center py-4 h-56 md:w-[80%] lg:w-fit my-6 mx-2">
            <div className="-mt-10 ">
              <ion-icon
                name="chatbubble-ellipses-outline"
                className="text-3xl md:text-5xl rounded-full p-4 bg-white text-white -mt-8"
              ></ion-icon>
            </div>
            <div className="flex flex-col items-start px-8 text-blue-900">
              <div className="font-semibold text-2xl m-1">Chat Live</div>
              <p className="  text-lg  m-1">
                We are available for customer support 24X7.
              </p>
              <p className="  text-sm m-1 px-6 bg-blue-900 py-2 rounded hover:bg-blue-700 p-5 text-white font-medium">
                <a href="#">Chat Now</a>
              </p>
            </div>
          </div>
          <div className="bg-gray-200 shadow-lg flex flex-col justify-center rounded-lg items-center py-4 h-56 md:w-[80%] lg:w-fit my-6 mx-2">
            <div className="-mt-10 ">
              <ion-icon
                name="mail-outline"
                className="text-3xl md:text-5xl rounded-full p-4 bg-white text-white -mt-8"
              ></ion-icon>
            </div>
            <div className="flex flex-col items-start px-8 text-blue-900">
              <div className="font-semibold text-2xl m-1">Chat Live</div>
              <p className="  text-lg  m-1">
                We are available for chat to solve your problems.
              </p>
              <p className="text-sm m-1 px-6 bg-blue-900 py-2 rounded hover:bg-blue-700 p-5 text-white font-medium">
                <a href="#">Get Started</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
