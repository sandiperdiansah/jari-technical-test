import Button from '@/components/shared/button';
import PasswordInput from '@/components/shared/input/PasswordInput';
import Link from 'next/link';

const FormResetPassword = () => {
    return (
        <form className="space-y-4">
            <PasswordInput
                label="Password"
                name="password"
                placeholder="Password"
            />

            <PasswordInput
                label="Confirm Password"
                name="confirmPassword"
                placeholder="Confirm Password"
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

export default FormResetPassword;
