import React from 'react';
export type TabTitleProps = {
    icon?: React.ReactNode;
    activeTab: string;
    isActive?: boolean;
    setSelectedTab: (title: string) => void;
    title: string;
    className?: string;
    variant: 'primary' | 'secondary';
    onChange?: () => void;
};
declare const TabTitle: ({ icon, activeTab, isActive, setSelectedTab, title, className, variant, onChange }: TabTitleProps) => React.JSX.Element;
export default TabTitle;
