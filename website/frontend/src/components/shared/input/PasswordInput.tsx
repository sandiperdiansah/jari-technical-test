'use client';

import Eye from '@/components/shared/icons/Eye';
import EyeOff from '@/components/shared/icons/EyeOff';
import InputGroup from '@/components/shared/input/InputGroup';
import { PasswordInputProps } from '@/components/shared/input/types';
import { useCallback, useState } from 'react';

const PasswordInput = ({ ...props }: PasswordInputProps) => {
    const [type, setType] = useState<'text' | 'password'>('password');

    const toggleType = useCallback(() => {
        setType(type === 'text' ? 'password' : 'text');
    }, [type]);

    return (
        <InputGroup
            type={type}
            endIcon={
                <button
                    type="button"
                    className="flex cursor-pointer items-center rounded-md p-1 transition-colors hover:bg-gray-100"
                    aria-label="toggle type"
                    onClick={toggleType}
                >
                    <span className="block size-5">
                        {type === 'password' ? (
                            <Eye className="size-full" />
                        ) : (
                            <EyeOff className="size-full" />
                        )}
                    </span>
                </button>
            }
            {...props}
        />
    );
};

export default PasswordInput;
