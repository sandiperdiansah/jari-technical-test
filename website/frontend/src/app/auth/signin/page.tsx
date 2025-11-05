import dynamic from 'next/dynamic';

const FormSignin = dynamic(() => import('@/components/features/auth/FormSignin'));

const Page = () => {
    return <FormSignin />;
};

export default Page;
