import { WrapperProps } from "../../types/Wrapper";

const Wrapper: React.FC<WrapperProps> = ({ className, children }) => {
  return (
    <div className={`${className} w-100 2xl:w-[1400px] max-w-full mx-auto`}>
      {children}
    </div>
  );
};

export default Wrapper;
