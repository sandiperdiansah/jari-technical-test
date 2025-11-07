"use client";

import Button from "@/components/shared/button";
import PinInput from "@/components/shared/input/PinInput";
import Link from "next/link";

const FormVerify = () => {
    return (
        <form className="space-y-8">
            <PinInput
                each={5}
                onComplete={(pin) => {
                    console.log("pin completed", pin);
                }}
                onChange={(pin) => {
                    console.log("pin changed", pin);
                }}
            />

            <div className="space-y-4">
                <Button
                    type="submit"
                    className="btn-primary"
                >
                    Confirm
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
            </div>
        </form>
    );
};

export default FormVerify;
