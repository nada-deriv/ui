import React, { ReactNode } from "react";
import { InputVariants } from ".";
export interface HelperMessageProps {
    error?: boolean;
    message?: ReactNode;
    variant?: InputVariants;
    disabled?: boolean;
}
declare const HelperMessage: ({ error, message, variant, disabled, }: HelperMessageProps) => React.JSX.Element;
export default HelperMessage;
