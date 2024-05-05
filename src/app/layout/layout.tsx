import AuthModal from "@/features/auth-modal";
import Footer from "@/features/footer";
import Header from "@/features/header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <main>
            <Header />
            <Outlet />

            <AuthModal />
            <Footer />
        </main>
    );
};

export default Layout;
