import { FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div
      data-aos="fade-down"
      className="2xl:px-48 xl:px-24 sm:px-16 px-8 sm:pt-14 pt-4"
    >
      <div className="bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl text-white pt-14 px-8">
        {/* heading section */}
        <h2
          data-aos="fade-down"
          data-aos-delay="300"
          className="text-white font-semibold tracking-wider text-center text-4xl mb-10"
        >
          Contact Us
        </h2>
        {/* article section */}
        <div className="flex flex-wrap justify-between gap-14 items-start">
          {/* location */}
          <div className="flex flex-col gap-4 items-center justify-center">
            <span className="text-5xl">
              <FaLocationPin />
            </span>
            <p className="text-center max-w-60">
              #92, 3rd Main, Virgo Nagar, Post,
              <br /> Seegehalli, Bengaluru, Karnataka 560049
            </p>
          </div>
          {/* Email */}
          <div className="flex flex-col gap-4 items-center justify-center">
            <span className="text-5xl">
              <MdEmail />
            </span>
            <div className="text-center max-w-60">
              <p>info@goodfood.com</p>
              <p>hr@goodfood.com</p>
            </div>
          </div>
          {/* location */}
          <div className="flex flex-col gap-4 items-center justify-center">
            <span className="text-5xl">
              <FaPhone />
            </span>
            <div className="text-center max-w-60">
              <p>+91 9643224232 - Sales and Services</p>
              <p>+91 9623423436 - Hiring Queries</p>
              <p>+91 2345232445 - Whatsapp</p>
            </div>
          </div>
        </div>
        {/* copyright section */}
        <div className="border-t-4 border-white flex justify-between mt-5 py-3">
          <p>&copy;2024 MFETI. All rights reserved </p>
          <div className="space-x-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
