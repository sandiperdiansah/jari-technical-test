import { IconProps } from '@/components/shared/icons/types';
import clsx from 'clsx';

const Mail = ({ className, strokeWidth = 2, ...props }: IconProps) => {
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
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect
                x="2"
                y="4"
                width="20"
                height="16"
                rx="2"
            />
        </svg>
    );
};

export default Mail;
