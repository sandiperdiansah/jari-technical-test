import dynamic from 'next/dynamic';

const FormSignup = dynamic(() => import('@/components/features/auth/FormSignup'));

const Page = () => {
    return <FormSignup />;
};

export default Page;
