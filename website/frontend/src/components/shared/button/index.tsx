import { ButtonProps } from '@/components/shared/button/types';
import clsx from 'clsx';
import React from 'react';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { children, type = 'button', className, loading = false, ...rest } = props;

    return (
        <button
            ref={ref}
            type={type}
            disabled={loading}
            className={clsx('btn btn-primary', className)}
            aria-busy={loading}
            {...rest}
        >
            {!loading ? (
                children
            ) : (
                <span
                    className={clsx(
                        'inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent',
                    )}
                    aria-hidden="true"
                />
            )}
        </button>
    );
});

Button.displayName = 'Button';
export default Button;
