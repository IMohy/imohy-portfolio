import BannerLayout from "../shared/BannerLayout";

const Banner = () => {
    return (
        <BannerLayout>
            <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
                <div className="bg-LightGray/10 w-full h-full px-4 py-2 rounded-xl overflow-hidden flex md:block">
                    <div className="flex flex-col items-center justify-center h-full gap-4">
                        <div className="">
                            <h1 className="text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold">Summary!</h1>
                        </div>
                        <div className=" py-4 font-cascadia-normal text-Snow pb-4 text-xs h-20 lg:h-auto text-center">
                            <span>
                                {"<"}
                                <span className="text-Green sm:text-base xl:text-lg font-bold">div</span>
                                {">"}{" "}
                                <span className="text-Snow sm:text-xl xl:text-2xl font-bold">
                                    {" "}
                                    I am a Dedicated front-end web developer, crafting engaging and responsive user interfaces using
                                    technologies such as Next.js, Vite.js, React, and TypeScript.
                                </span>{" "}
                                {"</"}
                                <span className="text-Green sm:text-base xl:text-lg font-bold">div</span>
                                {">"}{" "}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </BannerLayout>
    );
};

export default Banner;
