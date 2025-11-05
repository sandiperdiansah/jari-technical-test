import { InputProps } from '@/components/shared/input/types';
import clsx from 'clsx';

const Input = (props: InputProps) => {
    const { invalid = false, className, ...rest } = props;

    return (
        <input
            className={clsx(
                'input',
                !invalid ? 'input-primary' : 'input-error',
                className,
            )}
            {...rest}
        />
    );
};

export default Input;
