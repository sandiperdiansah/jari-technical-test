import { ForProps } from '@/components/shared/types';
import React from 'react';

const For = <T,>({ each, children }: ForProps<T>) => {
    return (
        <>
            {each.map((data, i) => (
                <React.Fragment key={i}>{children(data, i)}</React.Fragment>
            ))}
        </>
    );
};

export default For;
