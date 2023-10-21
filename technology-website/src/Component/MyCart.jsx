import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const cartProducts = useLoaderData();
  const [cartData, setCartData] = useState(cartProducts);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://tech-product-server-ecdtknwbq-iqbals-projects-c94de1fb.vercel.app/cart"
    )
      .then((res) => res.json())
      .then(() => {
        setLoading(false);
      });
  }, []);

  const deleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://tech-product-server-ecdtknwbq-iqbals-projects-c94de1fb.vercel.app/cart/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remain = cartData.filter((item) => item._id !== id);
              setCartData(remain);

              Swal.fire(
                "Deleted!",
                "Your Product has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

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
    <section className="xl:max-w-screen-xl xl:mx-auto mx-3 mb-24">
      <h1 className="mx-auto block text-4xl font-medium border-b-4 w-fit border-black border-dotted   my-10">
        Cart ({cartData.length})
      </h1>

      <div>
        {cartData?.length === 0 ? (
          <div className="mb-24">
            <h1 className="text-center text-3xl font-medium text-blue-700">
              There is No Product
            </h1>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
            {cartData?.map((item) => (
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
                        <button
                          onClick={() => deleteProduct(item._id)}
                          className="py-3 text-center cursor-pointer text-white font-medium bg-red-400 w-full rounded-md"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyCart;
