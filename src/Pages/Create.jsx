import React from "react";

const Create = () => {
  return (
    <div className="createContainer  ">
      <div className="createWrapper  w-[95%] xsm:w-[90%] sm:w-[88%] m-auto ">
        {/* header section  */}
        <div className="homePageTitle  ">
          <h1 className=" titleFont  text-xl xsm:text-2xl sm:text-3xl mb-2 xsm:mb-2.5  ">
            Create
          </h1>

          <p className=" text-xs xsm:text-sm sm:text-base md:text-lg  w-full sm:w-[94%] md:w-[85%] xmd:w-[75%] lg:w-[50%]  ">
            Create a creative image using the OPENAI API and distribute it
            within the community.
          </p>
        </div>

        {/* header section  ends */}

        {/* name section  */}
        <div className="inpSection  mt-4 xsm:mt-6 md:mt-9  ">
          <div className="">
            <label
              htmlFor="default-input"
              className=" formalFont text-sm sm:text-base  font-semibold text-gray-900 dark:text-white "
            >
              Your name
            </label>
            <input
              type="text"
              readOnly
              id="default-input"
              placeholder="User name"
              className="mt-2.5 bg-gray-50 border-none outline-none text-gray-900 text-xs sm:text-sm rounded block w-[85%] xsm:w-[75%] sm:w-[70%] xmd:w-[60%] lg:w-[50%] p-1.5 sm:p-2 md:p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white "
            />
          </div>
        </div>
        {/* name section starts  */}

        {/* user input section starts  */}

        <div className="inpSection  mt-8  ">
          <div className="">
            <div className="inputTop  flex items-center gap-1.5  ">
              <div className="prompt  ">
                <h1>Prompt</h1>
              </div>

              <div className="surpriceBtn">
                <button className=" bg-gray-300 p-1 rounded-md hover:bg-gray-500 hover:text-white active:scale-95 text-sm font-semibold  ">
                  Surprice me
                </button>
              </div>
            </div>

            <input
              type="text"
              id="default-input"
              placeholder="User name"
              className="mt-2.5 bg-gray-50 border-none outline-none text-gray-900 text-xs sm:text-sm rounded block w-[85%] xsm:w-[75%] sm:w-[70%] xmd:w-[60%] lg:w-[50%] p-1.5 sm:p-2 md:p-2.5  "
            />
          </div>
        </div>

        {/* user input section ends  */}

        {/* generate section starts  */}
        <div className="imgGenerateSection  mt-8  pb-5 ">
          {/* img generate section  */}
          <div className="imgGeneration bg-gray-300 w-[14rem] h-[14rem]  rounded ">
            <img
              src="https://i.ibb.co/jZGwY2Y/preview.png"
              alt=""
              className=" w-full h-full "
            />
          </div>
          {/* img generate section  */}

          {/* generate button section */}
          <div className="generateBtn">
            <button className="bg-violet-600 hover:bg-violet-800 active:scale-95  mt-3.5 py-1.5 px-4 rounded font-semibold text-gray-100 ">
              Generate
            </button>
          </div>
          {/* generate button section ends */}
        </div>
        {/* generate section ends */}

        {/*  */}
      </div>
    </div>
  );
};

export default Create;
