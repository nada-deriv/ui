import { ReactElement } from 'react';
import { TabTitleProps } from './TabTitle';
type TabsProps = {
    children: ReactElement<TabTitleProps>[];
    activeTab?: string;
    wrapperClassName?: string;
    className?: string;
    variant?: 'primary' | 'secondary';
    onChange?: (index: number) => void;
};
declare const Tabs: ({ children, activeTab, wrapperClassName, className, variant, onChange }: TabsProps) => JSX.Element;
export default Tabs;
