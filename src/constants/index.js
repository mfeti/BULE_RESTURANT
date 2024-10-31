import { heroBg } from "../assets";
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#contact-us", label: "Contact Us" },
];
export const dropDownLinks = [
  { href: "#fruit", label: "Fruits" },
  { href: "#vegetables", label: "Vegetables" },
  { href: "#grains", label: "Grains" },
];

export const bgImage = {
  backgroundImage: `url(${heroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};
