import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateProducts = () => {
  const productData = useLoaderData();

  const updateProductData = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const brandName = e.target.brandName.value;
    const type = e.target.type.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const imageURL = e.target.imageURL.value;
    const description = e.target.description.value;

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
      `https://tech-product-server-ecdtknwbq-iqbals-projects-c94de1fb.vercel.app/products/${productData._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Great",
            text: "Product Updated Successfully",
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
            Update Product
          </h1>
        </div>

        <form
          onSubmit={updateProductData}
          className="mx-auto mb-0 mt-8 max-w-xl space-y-4"
        >
          <div className="flex gap-2 font-medium flex-col">
            <label className="text-xl">Product Name :</label>

            <div className="relative">
              <input
                required
                type="text"
                name="name"
                defaultValue={productData.name}
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                placeholder="Enter Product Name"
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
                defaultValue={productData.brandName}
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                placeholder="Enter Brand Name"
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
                defaultValue={productData.type}
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                placeholder="Enter Product Type"
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
                defaultValue={productData.price}
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                placeholder="Enter Price"
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
                defaultValue={productData.rating}
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                placeholder="Enter Rating"
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
                defaultValue={productData.imageURL}
                className="w-full rounded-lg text-lg border-2 focus:outline-blue-500 border-gray-500 p-4 pe-12 shadow-sm"
                placeholder="Enter Image URL"
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
                defaultValue={productData.description}
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </div>

          <input
            className="w-full rounded-lg text-lg bg-blue-600 text-white font-medium cursor-pointer p-4 pe-12 shadow-sm"
            type="submit"
            value="Update Product"
          />
        </form>
      </div>
    </section>
  );
};

export default UpdateProducts;
