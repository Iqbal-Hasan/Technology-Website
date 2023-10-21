import { Link } from "react-router-dom";

const Brands = () => {
  return (
    <section className="py-24 dark:bg-[#1d2027] border-b-2 border-white">
      <h1 className="mx-auto block text-4xl font-medium border-b-4 w-fit border-black border-dotted dark:text-white dark:border-white mb-10">
        Brands
      </h1>

      <div className="flex gap-5 flex-wrap justify-center xl:max-w-screen-xl xl:mx-auto">
        {/* apple */}
        <Link to={"/brand/apple"} className="group relative block">
          <span className="absolute rounded-lg inset-0 border-2 dark:border-white border-dashed border-black"></span>
          <div className="relative rounded-lg transform border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-5 gap-5 flex items-center">
              <img
                className="w-[40px] h-[40px]"
                src="https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-1/512/apple-256.png"
                alt=""
              />
              <h2 className="text-xl font-medium sm:text-2xl">Apple</h2>
            </div>
          </div>
        </Link>

        {/* google */}
        <Link to={"/brand/google"} className="group relative block">
          <span className="absolute rounded-lg inset-0 border-2 dark:border-white border-dashed border-black"></span>
          <div className="relative rounded-lg transform border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-5 gap-5 flex items-center">
              <img
                className="w-[40px] h-[40px]"
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-256.png"
                alt=""
              />
              <h2 className="text-xl font-medium sm:text-2xl">Google</h2>
            </div>
          </div>
        </Link>

        {/* beats */}
        <Link to={"/brand/beats"} className="group relative block">
          <span className="absolute rounded-lg inset-0 border-2 dark:border-white border-dashed border-black"></span>
          <div className="relative rounded-lg transform border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-5 gap-5 flex items-center">
              <img
                className="w-[40px] h-[40px]"
                src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/126-beatspill_beats_pill-256.png"
                alt=""
              />
              <h2 className="text-xl font-medium sm:text-2xl">Beats</h2>
            </div>
          </div>
        </Link>

        {/* microsoft */}
        <Link to={"/brand/microsoft"} className="group relative block">
          <span className="absolute rounded-lg inset-0 border-2 dark:border-white border-dashed border-black"></span>
          <div className="relative rounded-lg transform border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-5 gap-5 flex items-center">
              <img
                className="w-[40px] h-[40px]"
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/216_Microsoft_logo_logos-256.png"
                alt=""
              />
              <h2 className="text-xl font-medium sm:text-2xl">Microsoft</h2>
            </div>
          </div>
        </Link>

        {/* xiaomi */}
        <Link to={"/brand/xiaomi"} className="group relative block">
          <span className="absolute rounded-lg inset-0 border-2 dark:border-white border-dashed border-black"></span>
          <div className="relative rounded-lg transform border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-5 gap-5 flex items-center">
              <img
                className="w-[40px] h-[40px]"
                src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/xiaomi-256.png"
                alt=""
              />
              <h2 className="text-xl font-medium sm:text-2xl">Xiaomi</h2>
            </div>
          </div>
        </Link>

        {/* samsung */}
        <Link to={"/brand/samsung"} className="group relative block">
          <span className="absolute rounded-lg inset-0 border-2 dark:border-white border-dashed border-black"></span>
          <div className="relative rounded-lg transform border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-5 gap-5 flex items-center">
              <img
                className="w-[40px] h-[40px]"
                src="https://i.ibb.co/Bg7wsfV/samsung.png"
                alt=""
              />
              <h2 className="text-xl font-medium sm:text-2xl">Samsung</h2>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Brands;
