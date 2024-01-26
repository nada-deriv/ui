import React, { ComponentProps, ReactNode } from "react";
export type InputVariants = "general" | "success" | "error";
interface InputProps extends Omit<ComponentProps<"input">, "style" | "placeholder"> {
    label?: string;
    rightPlaceholder?: ReactNode;
    error?: boolean;
    variant?: InputVariants;
    message?: ReactNode;
}
export declare const Input: ({ label, id, error, message, rightPlaceholder, variant, className, disabled, ...rest }: InputProps) => React.JSX.Element;
export {};
