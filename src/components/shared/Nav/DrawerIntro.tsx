import React from "react";
import DrawerLayout from "../DrawerLayout";
import Intro from "../Intro";

type DrawerIntroProps = {
    onClose: () => void;
    isOpen: boolean;
};
export const DrawerIntro: React.FC<DrawerIntroProps> = ({ onClose, isOpen }) => {
    return (
        <DrawerLayout onClose={onClose} isOpen={isOpen}>
            <Intro />
        </DrawerLayout>
    );
};
