const Wrapper = ({ children, className }: any) => {
  return (
    <div
      className={`w-full max-w-screen-xl px-5 md:px-20 mx-auto ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
