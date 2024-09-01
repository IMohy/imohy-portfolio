import ExpertiseCard from "./ExpertiseCard";
import axios from "axios";
import { Key } from "react";
import ParagraphSkeleton from "../../shared/ParagraphSkeleton";
import { useQuery } from "@tanstack/react-query";
import { fetchExpertiseData } from "@/api/expertise";

const MyExpertise = () => {
    const { isLoading, data } = useQuery({
        queryKey: ["expertise"],
        queryFn: fetchExpertiseData,
    });
    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Expertise</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 ">
                {isLoading
                    ? [1, 2, 3, 4, 5, 6].map((_, i) => <ParagraphSkeleton key={i} className={"space-y-2 p-8"} />)
                    : data?.map((data: any, key: Key | null | undefined) => <ExpertiseCard key={key} data={data} />)}
            </div>
        </>
    );
};

export default MyExpertise;
