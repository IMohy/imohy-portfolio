import React from "react";

type LinerBarTypes = {
    title: string;
    bgColor: string;
};
const LinearBar: React.FC<LinerBarTypes> = ({ title, bgColor }) => {
    return (
        <div className="">
            <div className="flex justify-between mb-1">
                <span className="text-xs text-gray-400">{title}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                <div className={`${bgColor} h-2 rounded-full w-16 `}></div>
            </div>
        </div>
    );
};

export default LinearBar;
