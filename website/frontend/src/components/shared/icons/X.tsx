import { IconProps } from '@/components/shared/icons/types';
import clsx from 'clsx';

const X = ({ className, strokeWidth = 2, ...props }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={clsx('size-6', className)}
            aria-hidden="true"
            {...props}
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
};

export default X;
