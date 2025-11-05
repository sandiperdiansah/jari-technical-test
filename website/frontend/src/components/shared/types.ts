export type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
    size?: 'xs' | 'sm' | 'md';
    src: string;
    alt: string;
};

export type ForProps<T> = {
    each: T[];
    children: (data: T, i: number) => React.ReactNode;
};

export type BackdropProps = React.HTMLAttributes<HTMLDivElement>;

export type DotProps = React.HTMLAttributes<HTMLSpanElement> & {
    count?: number;
};

export type HgroupProps = React.HTMLAttributes<HTMLElement> & {
    label?: string;
    title?: string;
    description?: string;
};
