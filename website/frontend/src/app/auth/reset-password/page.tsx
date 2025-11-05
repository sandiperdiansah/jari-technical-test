import dynamic from 'next/dynamic';

const FormResetPassword = dynamic(
    () => import('@/components/features/auth/FormResetPassword'),
);

const Page = () => {
    return <FormResetPassword />;
};

export default Page;
