export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    invalid?: boolean;
};

export type InputGroupProps = InputProps & {
    label?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    error?: string;
};

export type PasswordInputProps = InputGroupProps;

export type PinInputProps = InputProps & {
    each?: number;
    onComplete?: (value: string) => void;
    onChange?: (value: string) => void;
};
