const Wrapper = ({ children, className }: any) => {
  return (
    <div
      className={`w-full max-w-screen-xl px-5 xl:px-20 md:px-10 mx-auto ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
