import { ComponentProps, PropsWithChildren, ReactElement } from 'react';
import { TGenericSizes } from '../../types';
import { Text } from '../Text';
type TVariant = 'contained' | 'ghost' | 'outlined';
type TColor = 'black' | 'primary-light' | 'primary' | 'white';
interface ButtonProps {
    ariaLabel?: ComponentProps<'button'>['aria-label'];
    color?: TColor;
    disabled?: ComponentProps<'button'>['disabled'];
    icon?: ReactElement;
    isFullWidth?: boolean;
    isLoading?: boolean;
    onClick?: ComponentProps<'button'>['onClick'];
    rounded?: Extract<TGenericSizes, 'md' | 'sm'>;
    size?: Extract<TGenericSizes, 'lg' | 'md' | 'sm'>;
    textSize?: ComponentProps<typeof Text>['size'];
    type?: ComponentProps<'button'>['type'];
    variant?: TVariant;
    className?: string;
}
export declare const Button: ({ ariaLabel, children, color, disabled, icon, isFullWidth, isLoading, onClick, rounded, size, textSize, type, variant, className }: PropsWithChildren<ButtonProps>) => import("react").JSX.Element;
export {};
