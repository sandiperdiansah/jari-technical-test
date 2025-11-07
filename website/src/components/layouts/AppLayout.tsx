import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/common/navbar"));
const Footer = dynamic(() => import("@/components/common/Footer"));

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
};

export default AppLayout;
