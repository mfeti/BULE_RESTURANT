/* eslint-disable react/prop-types */
function Button({ children, onClick, style }) {
  return (
    <button className={`${style}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
