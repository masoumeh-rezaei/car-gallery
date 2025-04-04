import CountUp from "react-countup";

export default function OverViewCounter (){
    return(
        <>
        <section className="container m-auto h-12 md:h-32">
        <div className=" grid grid-cols-4 mx-auto divide-x divide-slate-700 w-[90%] bg-white dark:bg-gray-800 dark:text-white/70 md:max-w-[800px] shadow-lg -translate-y-10 md:-translate-y-16 my-4 md:p-3 rounded-md p-3">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-2xl">
                <CountUp end={234} suffix='+' duration={2.75}/>
                </h1>
                <h1 className="sm:text-md text-xs md:text-lg">Clients</h1>
            </div >
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-2xl">
                <CountUp end={698} suffix='+' duration={2.75}/>
                </h1>
                <h1 className="sm:text-md text-xs md:text-lg">Posts</h1>
            </div >
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-2xl">
                <CountUp end={989} suffix='+' duration={2.75}/>
                </h1>
                <h1 className="sm:text-md text-xs md:text-lg">Service</h1>
            </div >
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-2xl">
                <CountUp end={1367} suffix='+' duration={2.75}/>
                </h1>
                <h1 className="sm:text-md text-xs md:text-lg">Workers</h1>
            </div >
        </div>
        </section>
        </>
    )
}