const Button = ({ style, children }) => {
  return (
    <button className={`btn py-3 px-10 rounded-md font-semibold ${style}`}>
      {children}
    </button>
  );
};
export default Button;
