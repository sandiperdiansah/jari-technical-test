import Button from "@/components/shared/button";
import InputGroup from "@/components/shared/input/InputGroup";
import PasswordInput from "@/components/shared/input/PasswordInput";
import Link from "next/link";

const FormSignup = () => {
    return (
        <form className="space-y-4">
            <InputGroup
                label="Name"
                name="name"
                placeholder="Name"
                autoComplete="on"
            />

            <InputGroup
                label="Email"
                name="email"
                placeholder="Email address"
                autoComplete="on"
            />

            <PasswordInput
                label="Password"
                name="password"
                placeholder="Password"
            />

            <div className="flex items-center justify-end">
                <Link
                    href="/auth/forgot-password"
                    className="text-sm text-amber-600 hover:underline"
                >
                    Forgot password?
                </Link>
            </div>

            <Button
                type="submit"
                className="btn-primary"
            >
                Sign up
            </Button>

            <span className="inline-block w-full text-center text-sm">
                already have an account?{" "}
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

export default FormSignup;
