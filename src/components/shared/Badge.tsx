import React from "react";

type BadgeProps = {
    title: string;
};
const Badge: React.FC<BadgeProps> = ({ title }) => {
    return <span className="py-2 px-3 text-xs text-Snow bg-EveningBlack rounded-full">{title}</span>;
};

export default Badge;
