/* eslint-disable react/prop-types */
function Button({ children, onClick }) {
  return (
    <button
      className="uppercase text-white font-inter font-semibold bg-secondary px-4 py-3 focus:outline-none focus:ring focus:ring-secondary rounded-sm"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
