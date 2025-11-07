import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/common/home/Hero"));
const Product = dynamic(() => import("@/components/common/home/Product"));
const Faq = dynamic(() => import("@/components/common/home/Faq"));
const Testimonials = dynamic(() => import("@/components/common/home/Testimonials"));
const Contact = dynamic(() => import("@/components/common/home/Contact"));

const Page = () => {
    return (
        <>
            <Hero />

            <Product />
            <Testimonials />
            <Faq />
            <Contact />
        </>
    );
};

export default Page;
