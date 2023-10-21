import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const DeatailsBrand = () => {
  const data = useLoaderData();
  const { name, brandName, imageURL, type, price, rating, description } = data;
  const cart = { name, brandName, imageURL, type, price, rating, description };

  const addToCartPage = () => {
    fetch(
      "https://tech-product-server-ecdtknwbq-iqbals-projects-c94de1fb.vercel.app/cart",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Great",
            text: "Product Added To Cart",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <section className="xl:max-w-screen-xl xl:mx-auto mx-3 mb-24">
      <h1 className="mx-auto block text-4xl font-medium border-b-4 w-fit border-black border-dotted dark:text-white dark:border-white my-10">
        Details
      </h1>

      <div className="">
        <div className="group block">
          <img
            src={data.imageURL}
            alt=""
            className=" cursor-pointer border-2 border-gray-700 w-full max-w-[500px] mx-auto object-cover object-center h-[450px] rounded-lg"
          />

          <div className="mt-2 text-md">
            <div className="flex justify-between">
              <h3 className="text-gray-900 mx-auto dark:text-white group-hover:underline group-hover:underline-offset-4">
                {data.name}
              </h3>
            </div>
            <div className="mt-2 text-lg space-y-3">
              <p>
                <span className="text-xl font-semibold">Name : </span>
                {data.name}
              </p>
              <p>
                <span className="text-xl font-semibold">Price : </span>$
                {data.price}
              </p>
              <p>
                <span className="text-xl font-semibold">Brand : </span>
                {data.brandName}
              </p>
              <p>
                <span className="text-xl font-semibold">Type : </span>
                {data.type}
              </p>
              <p>
                <span className="text-xl font-semibold">Rating : </span>
                {data.rating} / 5
              </p>
              <p>
                <span className="text-xl font-semibold">Description : </span>
                {data.description}
              </p>

              <div className="flex gap-5 mt-3 justify-center items-center">
                <button
                  onClick={addToCartPage}
                  className="py-3 mt-10 max-w-[400px] text-center cursor-pointer text-white font-medium bg-blue-400 w-full rounded-md"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeatailsBrand;
