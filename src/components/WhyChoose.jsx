import { FaBus } from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="bg-gray-50 py-14 md:py-28">
      <div className="2xl:px-40 xl:px-24 sm:px-16 px-8">
        {/* text content section */}
        <h2 className="pb-16 text-center font-semibold text-2xl tracking-wider text-dark">
          Why Choose Us
        </h2>
        {/* card section */}
        <div className="">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-14">
            {/* 1st 📦 */}
            <div className="text-center flex flex-col justify-center items-center gap-2 px-2">
              <p className="text-dark/70 font-semibold">
                Lorem ipsum dolor sit amet ipsum dolor sit amet
              </p>
              <p className="text-primary text-5xl rotate-90 translate-x-5">
                ....
              </p>
              <FaBus className="text-5xl text-primary" />
            </div>
            {/* 2nd 📦 */}
            <div className="text-center flex flex-col justify-center items-center gap-2 px-2">
              <FaBus className="text-5xl text-secondary" />
              <p className="text-secondary text-5xl rotate-90 translate-x-5">
                ....
              </p>
              <p className="text-dark/70 font-semibold">
                Lorem ipsum dolor sit amet ipsum dolor sit amet
              </p>
            </div>
            {/* 3rd 📦 */}
            <div className="text-center flex flex-col justify-center items-center gap-2 px-2">
              <p className="text-dark/70 font-semibold">
                Lorem ipsum dolor sit amet ipsum dolor sit amet
              </p>
              <p className="text-primary text-5xl rotate-90 translate-x-5">
                ....
              </p>
              <FaBus className="text-5xl text-primary" />
            </div>
            {/* 4th 📦 */}
            <div className="text-center flex flex-col justify-center items-center gap-2 px-2">
              <FaBus className="text-5xl text-secondary" />
              <p className="text-secondary text-5xl rotate-90 translate-x-5">
                ....
              </p>
              <p className="text-dark/70 font-semibold">
                Lorem ipsum dolor sit amet ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
