const Wrapper = ({ children, className }: any) => {
  return (
    <div
      className={`w-full max-w-screen-xl px-5 md:px-10 mx-auto my-[60px] ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
