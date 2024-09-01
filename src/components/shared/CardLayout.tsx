import React, { ReactNode } from "react";

type CardLayoutProps = {
    children: ReactNode;
    className?: string;
};
const CardLayout: React.FC<CardLayoutProps> = ({ children, className = "h-full w-full" }) => {
    return (
        <div
            className={`${className} boxShodow hover:transition-all !duration-200 hover:scale-[1.01] ease-linear rounded-xl`}
        >
            {children}
        </div>
    );
};

export default CardLayout;
