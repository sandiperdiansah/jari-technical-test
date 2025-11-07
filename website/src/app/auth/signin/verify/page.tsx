import dynamic from "next/dynamic";

const FormVerify = dynamic(() => import("@/components/features/auth/FormVerify"));

const Page = () => {
    return <FormVerify />;
};

export default Page;
