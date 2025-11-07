"use client";

import InputGroup from "@/components/shared/input/InputGroup";
import { sendMessageAction } from "@/features/message/actions";
import { useActionState, useEffect } from "react";

const ContactForm = () => {
    const [state, formAction, isPending] = useActionState(sendMessageAction, null);

    useEffect(() => {
        if (state?.success) {
            alert("Message sent successfully");
        }
    }, [state?.success]);
    
    return (
        <form
            action={formAction}
            className="mx-auto grid grid-cols-1 gap-6 p-6 md:grid-cols-2 md:gap-8 md:p-8"
        >
            <div className="space-y-4">
                <InputGroup
                    label="Name"
                    name="name"
                    placeholder="Name"
                    autoComplete="on"
                    invalid={state?.errors && "name" in state.errors}
                    error={
                        state?.errors && "name" in state.errors && state.errors.name
                            ? state.errors.name[0]
                            : undefined
                    }
                />

                <InputGroup
                    label="Email"
                    name="email"
                    placeholder="Email address"
                    autoComplete="on"
                    invalid={state?.errors && "email" in state.errors}
                    error={
                        state?.errors && "email" in state.errors && state.errors.email
                            ? state.errors.email[0]
                            : undefined
                    }
                />

                <InputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Phone number"
                    autoComplete="on"
                    invalid={state?.errors && "phone" in state.errors}
                    error={
                        state?.errors && "phone" in state.errors && state.errors.phone
                            ? state.errors.phone[0]
                            : undefined
                    }
                />
            </div>

            <div className="space-y-3">
                <label
                    htmlFor="message"
                    className="mb-0.5 block font-medium text-gray-600"
                >
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    className={`input input-primary h-56 resize-none ${state?.errors && "message" in state.errors ? "input-error" : ""}`}
                    placeholder="Message"
                ></textarea>

                {state?.errors && "message" in state.errors && state.errors.message && (
                    <div
                        className="text-sm"
                        aria-atomic="true"
                        aria-live="polite"
                    >
                        <span
                            className="mt-0.5 block text-red-600"
                            aria-hidden="true"
                        >
                            {state.errors.message[0]}
                        </span>
                    </div>
                )}

                <div className="ms-auto max-w-3xs">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        aria-label="Send message"
                        disabled={isPending}
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
