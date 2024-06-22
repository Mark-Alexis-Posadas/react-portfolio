import Sidebar from "./components/sidebar";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-[600px] w-full min-h-screen">content</main>
    </div>
  );
}
