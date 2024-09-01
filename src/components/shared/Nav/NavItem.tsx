import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode } from "react";

type NavItemProps = {
    onClose: () => void;
    NavIcon: ReactNode;
    NavText: string;
    NavRoute: string;
};

const NavItem: React.FC<NavItemProps> = ({ NavIcon, NavText, NavRoute, onClose }) => {
    const pathname = usePathname();
    const className =
        pathname === `${NavRoute}` ? "rounded-xl !text-DeepNightBlack bg-Green font-bold tracking-widest" : "";

    return (
        <Link
            onClick={onClose}
            href={NavRoute}
            className={`${className} transition flex items-center px-2 hover:bg-EveningBlack text-SilverGray hover:text-SilverGray rounded-xl  py-1.5 font-semibold space-x-4 text-base`}
        >
            {NavIcon}
            <span>{NavText}</span>
        </Link>
    );
};

export default NavItem;
