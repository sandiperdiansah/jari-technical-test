import dynamic from "next/dynamic";

const FormForgotPassword = dynamic(
    () => import("@/components/features/auth/FormForgotPassword"),
);

const Page = () => {
    return <FormForgotPassword />;
};

export default Page;
