/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";
import { bgStyle } from "../constants";
import Button from "../ui/Button";
import { vectorWave } from "../assets";

function About({ handlePopup }) {
  return (
    <section style={bgStyle} className="sm:py-14 py-7">
      <div className="2xl:px-40 xl:px-24 sm:px-16 px-8 min-h-[500px] pt-24">
        <h2
          data-aos="fade"
          className="text-4xl font-semibold text-center text-white tracking-wider"
        >
          About Us
        </h2>
        {/* card section */}
        <div
          data-aos="fade"
          data-aos-delay="300"
          className="bg-white/70 mt-10 px-8 py-10 max-w-4xl mx-auto"
        >
          <p className="text-dark text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            doloribus blanditiis culpa ipsa autem! Quas in ut cumque quo, eum ab
            ea inventore voluptatum at dignissimos repellat placeat quaerat
            veniam fugit? Quasi quidem, saepe tenetur quam nihil velit nobis eum
            ad hic odio mollitia itaque consectetur eaque unde cumque possimus
            reprehenderit quas beatae praesentium consequatur? Eum magni
            doloremque obcaecati necessitatibus soluta doloribus quos temporibus
            aperiam, at harum earum, commodi, eligendi omnis fugiat error
            exercitationem ullam labore culpa aliquam possimus pariatur? Atque
            repudiandae beatae animi ducimus voluptate minima temporibus neque
            libero dolore ipsam, accusamus omnis ullam id aspernatur, quas fuga
            esse.
          </p>
          <div className="flex justify-center mt-14">
            <Button style="bg-primary " handlePopup={handlePopup}>
              <span>
                <FaUser />
              </span>{" "}
              My Account
            </Button>
          </div>
        </div>
      </div>
      {/* Wave image section */}
      <div className="absolute left-0 -top-2 right-0 w-screen">
        <img src={vectorWave} alt="vectorWave" className="w-full" />
      </div>
    </section>
  );
}

export default About;
