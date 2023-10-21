import { useEffect } from "react";
import { useState } from "react";

const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch(
      "https://tech-product-server-ecdtknwbq-iqbals-projects-c94de1fb.vercel.app/products"
    )
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
      });
  }, []);

  return (
    <section className="relative py-24 dark:bg-[#1d2027] border-b-2 border-white">
      <div className="max-w-xl text-center mx-auto">
        <h1 className="text-gray-800 mx-auto block text-4xl font-medium border-b-4 w-fit border-black border-dotted dark:text-white dark:border-white mb-10">
          Products
        </h1>
      </div>

      <div className="xl:max-w-screen-xl mx-4 xl:mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {productData?.slice(0, 8).map((item) => (
            <div key={item._id} className="">
              <div className="group block cursor-pointer">
                <img
                  src={item.imageURL}
                  alt=""
                  className=" w-full object-cover object-center h-[450px] rounded-lg border-2 border-gray-500 dark:border-transparent"
                />

                <div className="mt-3 flex justify-between text-sm">
                  <div>
                    <h3 className="text-gray-900 dark:text-white group-hover:underline group-hover:underline-offset-4">
                      {item.name}
                    </h3>

                    <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500 dark:text-gray-300">
                      {item.description.slice(0, 100)}...
                    </p>
                  </div>

                  <p className="text-gray-900 dark:text-white">${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
