import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { MyProvider } from "./context/MyContextProvider";

const Layout = () => {
  return (
    <div className="min-h-screen flex items-center">
      <MyProvider>
        <Sidebar />
        <Main />
      </MyProvider>
    </div>
  );
};

export default Layout;
