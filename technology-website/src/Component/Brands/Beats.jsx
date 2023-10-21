import { Carousel } from "@material-tailwind/react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Beats() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://tech-product-server-ecdtknwbq-iqbals-projects-c94de1fb.vercel.app/products"
    )
      .then((res) => res.json())
      .then((data) => {
        const brand = "Beats";
        const sortedData = data.filter(
          (item) => item.brandName.toLowerCase() === brand.toLowerCase()
        );
        setProductData(sortedData);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-[100%] h-[700px]">
        <div role="status" className="">
          <svg
            aria-hidden="true"
            className="w-10 h-10 mr-2 text-gray-400 animate-spin  fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <section className="mx-3">
      <h1 className="mx-auto block text-4xl font-medium border-b-4 w-fit border-black border-dotted   my-10">
        Beats
      </h1>
      <Carousel
        className="rounded-lg xl:max-w-screen-xl xl:mx-auto overflow-hidden mb-5"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src="https://i.ibb.co/GRB1M6W/design-medium.jpg"
          alt="image 1"
          className="md:h-[600px] sm:h-[500px] h-[400px] lg:h-[700px] w-full object-cover object-center"
        />
        <img
          src="https://i.ibb.co/yP22KT2/images-q-tbn-ANd9-Gc-Rdu-MXx-Etiq-HC2hwx7-RSwk2pl4bldk-SK7-Rw9g-usqp-CAU.jpg"
          alt="image 2"
          className="md:h-[600px] sm:h-[500px] h-[400px] lg:h-[700px] w-full object-cover object-center"
        />
        <img
          src="https://i.ibb.co/3hHZtVN/99696c341e649db418bc469b52da2cac.jpg"
          alt="image 3"
          className="md:h-[600px] sm:h-[500px] h-[400px] lg:h-[700px] w-full object-cover object-center"
        />
      </Carousel>

      <h1 className="mx-auto block text-4xl font-medium border-b-4 w-fit border-black border-dotted   my-10">
        Products
      </h1>

      {productData.length === 0 ? (
        <div className="mb-24">
          <h1 className="text-center text-3xl font-medium text-blue-700">
            There is No Product
          </h1>
        </div>
      ) : (
        <div className="xl:max-w-screen-xl xl:mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {productData?.map((item) => (
            <div key={item._id} className="">
              <div className="group block">
                <img
                  src={item.imageURL}
                  alt=""
                  className=" cursor-pointer w-full object-cover object-center h-[450px] rounded-lg border-2 border-gray-500 dark:border-transparent"
                />

                <div className="mt-2 text-md">
                  <div className="flex justify-between">
                    <h3 className="text-gray-900 dark:text-white group-hover:underline group-hover:underline-offset-4">
                      {item.name}
                    </h3>

                    <p className="text-gray-900 dark:text-white">
                      ${item.price}
                    </p>
                  </div>
                  <div className="mt-2">
                    <p>
                      <span className="font-medium">Brand : </span>
                      {item.brandName}
                    </p>
                    <p>
                      <span className="font-medium">Type : </span>
                      {item.type}
                    </p>
                    <p>
                      <span className="font-medium">Rating : </span>
                      {item.rating} / 5
                    </p>
                    <div className="flex gap-5 mt-3 justify-center items-center">
                      <Link
                        to={`/details/${item._id}`}
                        className="py-3  text-center cursor-pointer text-white font-medium bg-blue-400 w-full rounded-md"
                      >
                        Details
                      </Link>
                      <Link
                        to={`/update/${item._id}`}
                        className="py-3 text-center cursor-pointer text-white font-medium bg-red-400 w-full rounded-md"
                      >
                        Update
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
