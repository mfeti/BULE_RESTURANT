/* eslint-disable react/prop-types */
function Button({ children, handlePopup, style }) {
  return (
    <button
      className={`uppercase text-white font-inter font-semibold px-4 h-[40px] py-2 focus:outline-none focus:ring focus:ring-secondary/30 rounded-sm flex gap-2 items-center hover:scale-125 duration-300 whitespace-nowrap ${style}`}
      onClick={handlePopup}
    >
      {children}
    </button>
  );
}

export default Button;
