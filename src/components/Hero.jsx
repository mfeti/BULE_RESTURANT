import { hero } from "../assets";
import PrimaryButton from "../ui/PrimaryButton";
import { bgImage } from "../constants";
function Hero() {
  return (
    <section style={bgImage} id="#home" className="relative z-[-1]">
      <div className="2xl:px-48 xl:px-24 sm:px-16 px-8 py-4 sm:py-12 flex md:flex-row flex-col-reverse justify-center items-center">
        {/* Text content section */}
        <div className="flex flex-col gap-10 justify-center">
          <h1
            data-aos="fade-up"
            className="font-inter font-normal text-5xl max-w-2xl"
          >
            Fresh & Healthy Meal Plan{" "}
            <span className="text-secondary font-cursive text-7xl">
              Delivery
            </span>{" "}
            in Miami
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="font-normal text-lg text-dark max-w-80"
          >
            Delicious Meals Delivered to Your Door From $132.95 per week.
          </p>
          <div data-aos="fade-up" data-aos-delay="300" className="">
            <PrimaryButton />
          </div>
        </div>
        {/* Image  section */}
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="relative z-[30]"
        >
          <img
            src={hero}
            alt="food"
            className="w-full sm:scale-125 sm:translate-y-2 h-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
