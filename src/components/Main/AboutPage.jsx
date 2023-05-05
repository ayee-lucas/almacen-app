import React from "react";

const AboutPage = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="lg:w-10/12 w-full">
        <p className="font-normal text-sm leading-3 text-black hover:text-indigo-800 cursor-pointer">
          About
        </p>
        <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
          At our company, we are committed to providing safe and flexible
          storage solutions for our clients.
        </h2>
        <p className="font-normal text-base leading-6 text-gray-600 mt-6">
          We understand the importance of security and proper handling of goods,
          and that is why we offer a comprehensive range of amenities and
          services to complement your storage experience. With years of
          experience, we have built a reputation as a trusted partner in the
          management and storage of our clients' goods. You can trust us to
          store your products and focus on growing your business without
          worries. Contact us today to learn more about our services and
          discover how we can help you with your storage needs.
        </p>
      </div>

      <div className="lg:mt-14 sm:mt-10 mt-12">
        <img
          className="lg:block hidden w-full h-[350px] object-cover"
          src="https://images.unsplash.com/photo-1590755098163-d34c72438301?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Group of people Chilling"
        />
        <img
          className="lg:hidden sm:block hidden w-full"
          src="https://images.unsplash.com/photo-1590755098163-d34c72438301?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Group of people Chilling"
        />
        <img
          className="sm:hidden block w-full"
          src="https://images.unsplash.com/photo-1590755098163-d34c72438301?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Group of people Chilling"
        />
      </div>

      <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
        <div className="w-full xl:w-5/12 lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
            Our Story
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-4">
            As we grew, we realized that providing a complete and satisfactory
            storage experience for our clients meant more than just secure
            storage. We wanted to create a space where businesses could store
            their goods with ease and efficiency while enjoying a range of
            amenities that made their lives easier.
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            We invested in advanced security systems, implemented inventory
            management tools, and offered customized insurance options to meet
            the unique needs of our clients. Our commitment to exceptional
            service has earned us a reputation as a trusted partner in the
            management and storage of goods.
            <br />
            <br /> Today, we continue to innovate and adapt to the evolving
            needs of businesses. We are proud to offer a range of storage
            solutions that cater to businesses of all sizes, from startups to
            established enterprises. Our mission remains the same: to provide
            safe and reliable storage solutions that allow our clients to focus
            on growing their business.
          </p>
        </div>
        <div className="lg:flex items-center w-full lg:w-1/2 ">
          <img
            className="lg:block hidden w-full"
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt="people discussing on board"
          />
          <img
            className="lg:hidden sm:block hidden w-full h-3/4"
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt="people discussing on board"
          />
          <img
            className="sm:hidden block w-full"
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt="people discussing on board"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
