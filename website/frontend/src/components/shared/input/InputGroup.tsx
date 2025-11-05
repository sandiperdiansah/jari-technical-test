import Input from '@/components/shared/input';
import { InputGroupProps } from '@/components/shared/input/types';
import clsx from 'clsx';

const InputGroup = (props: InputGroupProps) => {
    const {
        type = 'text',
        label,
        name,
        startIcon,
        endIcon,
        invalid = false,
        error,
        className,
        ...rest
    } = props;

    return (
        <div>
            <label
                htmlFor={name}
                className="mb-0.5 block font-medium text-gray-600"
            >
                {label}
            </label>

            <div className="relative">
                {startIcon && (
                    <span className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center pl-2">
                        <svg
                            className="size-4 text-gray-400 dark:text-gray-500"
                            aria-hidden="true"
                        >
                            {startIcon}
                        </svg>
                    </span>
                )}

                <Input
                    id={name}
                    name={name}
                    type={type}
                    invalid={invalid}
                    className={clsx(
                        {
                            'pl-10': startIcon,
                            'pe-8': endIcon,
                        },
                        className,
                    )}
                    {...rest}
                />

                {endIcon && (
                    <span className="absolute inset-y-0 right-0 inline-flex items-center pe-2">
                        {endIcon}
                    </span>
                )}
            </div>

            {!invalid && (
                <div
                    className="text-sm"
                    aria-atomic="true"
                    aria-live="polite"
                >
                    <span
                        className="mt-0.5 block text-red-600"
                        aria-hidden="true"
                    >
                        {error}
                    </span>
                </div>
            )}
        </div>
    );
};

export default InputGroup;
