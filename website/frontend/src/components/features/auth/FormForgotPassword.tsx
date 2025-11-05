import Button from '@/components/shared/button';
import InputGroup from '@/components/shared/input/InputGroup';
import Link from 'next/link';

const FormForgotPassword = () => {
    return (
        <form className="space-y-4">
            <InputGroup
                label="Account"
                name="name"
                placeholder="Email address"
                autoComplete="on"
            />

            <Button
                type="submit"
                className="btn-primary"
            >
                Confirm
            </Button>

            <span className="inline-block w-full text-center text-sm">
                already remembered the account?{' '}
                <Link
                    href="/auth/signin"
                    className="text-sm text-amber-600 hover:underline"
                >
                    Sign in
                </Link>
            </span>
        </form>
    );
};

export default FormForgotPassword;
