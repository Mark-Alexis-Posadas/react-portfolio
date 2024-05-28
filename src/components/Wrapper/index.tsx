export default function Wrapper({ children }) {
  return (
    <div className="w-100 2xl :w-[1400px] max-w-full m-auto">{children}</div>
  );
}
