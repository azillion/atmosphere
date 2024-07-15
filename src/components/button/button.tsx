export interface ButtonProps {
    type: "submit" | "reset" | "button";
    children: React.ReactNode;
    className?: string;
};

export default function Button({ type, children, className }: ButtonProps) {
    return (
        <button
            type={type}
            className={className}
        >
            {children}
        </button>
    );
}
