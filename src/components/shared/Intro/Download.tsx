import Link from "next/link";
import { ReactNode } from "react";

type DownloadType = {
  icon: ReactNode;
};
const Download: React.FC<DownloadType> = ({ icon }) => {
  return (
    <>
      <Link
        href="/cv/Mohamed-Mohy Resume.pdf"
        target="_blank"
        className="flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4"
      >
        <span className="text-Snow">Download Resume</span>
        <span>{icon}</span>
      </Link>
    </>
  );
};

export default Download;
