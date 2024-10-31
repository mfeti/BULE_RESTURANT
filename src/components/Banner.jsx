import PrimaryButton from "../ui/PrimaryButton";
import { apple, kiwi, leaf, lemon, tomato } from "../assets/png";

function Banner() {
  return (
    <section className="2xl:px-40 xl:px-24 sm:px-16 px-8 sm:py-14 py-7 relative">
      <div>
        <h2 className="tracking-wider font-semibold text-center text-2xl py-8 text-dark">
          Taste the Healthy Difference
        </h2>
        <div className="grid sm:grid-cols-2 grid-cols-1 grid-rows-2 gap-4 space-y-10">
          <p>
            We know that <span className="text-primary">time</span> is the
            greatest value in the modern world.Our healthy meal plan delivery
            service Good Food in Miami is the answer for those who want to eat
            healthily, saving time for buying food and preparing delicious,
            healthy meals.
          </p>
          <div className=""></div>
          <div className=""></div>
          <p>
            We know that <span className="text-primary">time</span> is the
            greatest value in the modern world.Our healthy meal plan delivery
            service Good Food in Miami is the answer for those who want to eat
            healthily, saving time for buying food and preparing delicious,
            healthy meals.
          </p>
        </div>
        <div className="flex justify-center sm:mt-14 mt-10">
          <PrimaryButton />
        </div>
      </div>
      {/* bg fruits png */}
      <div className="absolute top-5 -left-16 z-[-999] sm:left-0 sm:opacity-100 opacity-30">
        <img src={leaf} alt="leaf" className="max-w-[160px] object-contain" />
      </div>
      <div className="absolute sm:bottom-0 -left-16 sm:left-0 opacity-30 sm:opacity-100">
        <img src={tomato} alt="tomato" className="max-w-[280px]" />
      </div>
      <div className="absolute sm:right-20 -right-16 top-10 opacity-30 sm:opacity-100">
        <img src={lemon} alt="lemon" className="max-w-[200px]" />
      </div>
      <div className="hidden sm:block absolute right-0 bottom-0">
        <img src={apple} alt="apple" className="max-w-[200px]" />
      </div>
      <div className="absolute  top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 z-[-999] opacity-30 sm:opacity-100">
        <img src={kiwi} alt="kiwi" className="max-w-[180px]" />
      </div>
    </section>
  );
}

export default Banner;
