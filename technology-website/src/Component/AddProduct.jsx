import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");

  const productData = (e) => {
    e.preventDefault();
    const product = {
      name,
      brandName,
      type,
      price,
      rating,
      imageURL,
      description,
    };

    //send data to sever
    fetch(
      "https://tech-product-server-ecdtknwbq-iqbals-projects-c94de1fb.vercel.app/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Great",
            text: "Product Added To Website",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        e.target.reset();
      });
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="mx-auto block text-4xl font-medium border-b-4 w-fit border-black border-dotted mb-10">
            Add Product
          </h1>
        </div>

        <form
          onSubmit={productData}
          className="mx-auto mb-0 mt-8 max-w-xl space-y-4"
        >
          <div className="flex gap-2 font-medium flex-col">
            <label className="text-xl">Product Name :</label>

            <div className="relative">
              <input
                required
                type="text"
                name="name"
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                placeholder="Enter Product Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-2 font-medium flex-col">
            <label className="text-xl">Brand Name :</label>

            <div className="relative">
              <input
                required
                type="text"
                name="brandName"
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                placeholder="Enter Brand Name"
                onChange={(e) => setBrandName(e.target.value)}
              />
              <div className="text-gray-600 flex items-center gap-2 m-1">
                <FontAwesomeIcon icon={faCircleInfo} />

                <small>
                  Available Brand - (Apple, Google, Beats, Microsoft, Samsung,
                  Xiaomi)
                </small>
              </div>
            </div>
          </div>

          <div className="flex gap-2 font-medium flex-col">
            <label className="text-xl">Product Type :</label>

            <div className="relative">
              <input
                required
                type="text"
                name="type"
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                placeholder="Enter Product Type"
                onChange={(e) => setType(e.target.value)}
              />
              <div className="text-gray-600 flex items-center gap-2 m-1">
                <FontAwesomeIcon icon={faCircleInfo} />

                <small>
                  Available Type - (Phone, watch, Laptop, Buds, Headphone)
                </small>
              </div>
            </div>
          </div>

          <div className="flex gap-2 font-medium flex-col">
            <label className="text-xl">Price :</label>

            <div className="relative">
              <input
                required
                name="price"
                type="number"
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                placeholder="Enter Price"
                onChange={(e) => setPrice(e.target.value)}
              />
              <div className="text-gray-600 flex items-center gap-2 m-1">
                <FontAwesomeIcon icon={faCircleInfo} />

                <small>Price in Doller</small>
              </div>
            </div>
          </div>

          <div className="flex gap-2 font-medium flex-col">
            <label className="text-xl">Rating :</label>

            <div className="relative">
              <input
                required
                name="rating"
                type="number"
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                placeholder="Enter Rating"
                onChange={(e) => setRating(e.target.value)}
              />
              <div className="text-gray-600 flex items-center gap-2 m-1">
                <FontAwesomeIcon icon={faCircleInfo} />

                <small>Rating Value ( 1 - 5 ) Star</small>
              </div>
            </div>
          </div>

          <div className="flex gap-2 font-medium flex-col">
            <label className="text-xl">Image URL :</label>

            <div className="relative">
              <input
                required
                type="text"
                name="imageURL"
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                placeholder="Enter Image URL"
                onChange={(e) => setImageURL(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-2 font-medium flex-col">
            <label className="text-xl">Description :</label>

            <div className="relative">
              <textarea
                name="description"
                required
                placeholder="Enter Product Description"
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                id="shortDescription"
                cols="30"
                rows="5"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>

          <input
            className="w-full rounded-lg text-lg bg-blue-600 text-white font-medium cursor-pointer p-4 pe-12 shadow-sm"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
