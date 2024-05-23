import { Toaster } from "react-hot-toast";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { HashLoader } from "react-spinners";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar />
      <div className="min-h-[65vh] md:min-h-[70vh]">
        {navigation.state === "loading" ? (
          <div className="flex justify-center mt-5">
            <HashLoader color="#9933FF" size={32} />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
      <Footer />
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default MainLayout;
