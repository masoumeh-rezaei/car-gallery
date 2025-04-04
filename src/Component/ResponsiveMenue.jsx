import { FaUserCircle } from "react-icons/fa";

export default function ResponsiveMenue({showMenue}){
    return(
        <>
        <div className={`${showMenue ? 'left-0' : '-left-[100%]'} h-screen text-white w-[75%] bg-slate-950 fixed top-0 z-50 transition-all duration-500 pt-24 pb-6 px-8 flex flex-col justify-between`}>
            <div>
                <div className="flex items-center gap-4  ">
                    <FaUserCircle className="size-10"/>
                    <div>
                        <h1>Masomeh Rezaei</h1>
                        <h1 className="text-sm text-slate-500">Premium User</h1>
                    </div>
                </div>
                <nav className="mt-12">
                    <ul className=" ">
                        <li className="group relative hover:bg-slate-900 w-full transition-all duration-700 py-3 rounded-md pl-2 hover:text-slate-500 "><a href="#" className="py-5  ">Home
                            <span className="absolute  size-3 top-0 right-0 hidden group-hover:flex transition-all duration-500">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-slate-500 opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-slate-400"></span>
                            </span>
                            </a></li>
                            <li className="group relative hover:bg-slate-900 w-full transition-all duration-700 py-3 rounded-md pl-2 hover:text-slate-500 "><a href="#" className="py-5  ">Services
                            <span className="absolute  size-3 top-0 right-0 hidden group-hover:flex transition-all duration-500">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-slate-500 opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-slate-400"></span>
                            </span>
                            </a></li>
                            <li className="group relative hover:bg-slate-900 w-full transition-all duration-700 py-3 rounded-md pl-2 hover:text-slate-500 "><a href="#" className="py-5  ">ContactUs
                            <span className="absolute  size-3 top-0 right-0 hidden group-hover:flex transition-all duration-500">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-slate-500 opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-slate-400"></span>
                            </span>
                            </a></li>
                            <li className="group relative hover:bg-slate-900 w-full transition-all duration-700 py-3 rounded-md pl-2 hover:text-slate-500 "><a href="#" className="py-5  ">Information
                            <span className="absolute  size-3 top-0 right-0 hidden group-hover:flex transition-all duration-500">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-slate-500 opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-slate-400"></span>
                            </span>
                            </a></li>
                    </ul>
                </nav>
            </div>
            <div className="footer">
                <h1>@2024 All right Reserved By Masomeh</h1>
            </div>

        </div>
        </>
    )
}