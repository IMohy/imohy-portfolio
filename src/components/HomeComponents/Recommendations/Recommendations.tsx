import RecommendationCard from "./RecommendationCard";
import axios from "axios";
import { Key } from "react";
import ParagraphSkeleton from "../../shared/ParagraphSkeleton";
import { fetchRecommendationsData } from "@/api/recommendations";
import { useQuery } from "@tanstack/react-query";

const Recommendations = () => {
    const { isLoading, data } = useQuery({
        queryKey: ["recommendations"],
        queryFn: fetchRecommendationsData,
    });
    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Recommendations</div>
            <div className="grid w-full h-full mt-5 justify-items-start grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-4 px-2 md:px-8 pb-8">
                {isLoading
                    ? [1, 2, 3, 4].map((_, i) => <ParagraphSkeleton key={i} className={"p-8 h-full w-full relative"} />)
                    : data?.map((data: any, key: Key | null | undefined) => <RecommendationCard key={key} data={data} />)}
            </div>
        </>
    );
};

export default Recommendations;
