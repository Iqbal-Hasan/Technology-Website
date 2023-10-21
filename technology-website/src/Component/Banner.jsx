const Bannar = () => {
    return (
      <>
        <div>
          <div className="relative flex justify-center">
            <img
              className="w-full h-[500px] md:h-[700px] object-cover object-center imageClass"
              src="./banner.jpg"
              alt=""
            />
  
            <div className="absolute top-[40%] text-white z-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-center lg:text-6xl mb-5 lg:mb-10">
                Make Your Life Easy
              </h1>
              <button className="mx-auto py-2 px-3 md:py-4 md:px-8 md:text-xl block rounded-md bg-blue-500">
                Browse Now
              </button>
            </div>
            <div className="absolute bg-black w-full h-[500px] md:h-[700px] opacity-70"></div>
          </div>
        </div>
      </>
    );
  };
  
  export default Bannar;
  