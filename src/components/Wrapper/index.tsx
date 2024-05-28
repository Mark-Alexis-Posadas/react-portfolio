import React, { ReactNode } from "react";

const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-100 2xl:w-[1400px] max-w-full mx-auto">{children}</div>
  );
};

export default Wrapper;
