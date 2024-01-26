import React, { CSSProperties, ElementType, ReactNode } from 'react';
type TGenericSizes = '2xl' | '2xs' | '3xl' | '3xs' | '4xl' | '5xl' | '6xl' | 'lg' | 'md' | 'sm' | 'xl' | 'xs';
export interface TextProps {
    align?: CSSProperties['textAlign'];
    as?: ElementType;
    children: ReactNode;
    color?: CSSProperties['color'] | 'error' | 'general' | 'less-prominent' | 'primary' | 'success' | 'warning';
    fontStyle?: CSSProperties['fontStyle'];
    lineHeight?: TGenericSizes;
    size?: Exclude<TGenericSizes, '3xs' | '6xl' | '7xl'>;
    weight?: CSSProperties['fontWeight'];
    className?: string;
}
export declare const Text: ({ align, as, children, color, fontStyle, lineHeight, size, weight, className }: TextProps) => React.JSX.Element;
export {};
