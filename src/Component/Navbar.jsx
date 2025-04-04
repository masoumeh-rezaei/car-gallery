import { BiPhoneCall, BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import imgNav from '../assets/navCar.jpg'
import imgNav2 from '../assets/carGallery.png'
import { useEffect, useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenue from './ResponsiveMenue'

export default function Navbar(){
    const [theme,setTheme]=useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    )
    const element = document.documentElement;
    useEffect(()=>{
        if(theme === 'dark'){
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }else{
            element.classList.remove('dark');
            localStorage.removeItem('theme')
        }
    },[theme])

    const [showMenue, setShowMenue] = useState(false)
    const toggleMenue=()=>{
        setShowMenue(!showMenue)
    }
    return(
        <>
        <header className=" fixed  w-full z-[99] bg-navbar text-white  border-b-4 border-violet-950">
            <nav className="container m-auto flex justify-between items-center">
                {/*logo section*/}
                <div className="flex p-2">
                    <a href="#" className="text-3xl ">MoOnCar</a>
                    <small className="allura-regular ">Speed</small>
                </div>
                {/*Desktop section*/}
                <div className="hidden md:block">
                    <ul className="flex items-center">
                        <li className="group relative cursor-pointer"><a href="#" className="px-3 py-1 flex items-center gap-[2px] h-[72px]">Home 
                            <span>
                                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180  "/>
                                </span>
                            </a>
                            {/*DropDown section*/}
                            <div className="absolute -left-9 z-[9999] hidden w-[150px] bg-white shadow-lg p-2 text-black group-hover:block rounded-md">
                                <ul className="space-y-3"> 
                                    <li className="p-2 hover:bg-violet-200 rounded-md">Services</li>
                                    <li className="p-2 hover:bg-violet-200 rounded-md">About Us</li>
                                    <li className="p-2 hover:bg-violet-200 rounded-md">Privacy policy</li>
                                </ul>
                            </div>
                            
                            </li>
                        <li className=" group cursor-pointer"><a href="#" className="px-3 py-1 flex items-center gap-[2px] h-[72px]">Service
                            <span>
                                <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180 "/>
                            </span>
                            </a>
                            {/*Dropdown full width section*/}
                            <div className="absolute left-0 z-[9999] hidden w-full rounded-b-3xl bg-white shadow-md text-black group-hover:block">
                                <div className="grid grid-cols-3 gap-5">
                                    <div className="overflow-hidden">
                                        <img src={imgNav} className="max-h-[300px] w-full rounded-b-3xl object-fill "/>
                                    </div>
                                    <div className="col-span-2">
                                        <h1 className="text-2xl font-semibold pb-3">Best Selling</h1>
                                        <p className="text-sm text-slate-600 pb-10">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur hic possimus nihil vel, sim

                                        </p>
                                        <div className="grid grid-cols-3 text-sm ">
                                            <div> 
                                                <h1 className="pb-1 text-xl font-semibold ">Development</h1>
                                                <ul className="space-y-2">
                                                    <li className="cursor-pointer text-black/80 hover:text-primary1">Car 1 Development</li>
                                                    <li className="cursor-pointer text-black/80 hover:text-primary1">Car 2 Development</li>
                                                    <li className="cursor-pointer text-black/80 hover:text-primary1">Car 3 Development</li>
                                                </ul>
                                                 </div>
                                                 <div> 
                                                <h1 className="pb-1 text-xl font-semibold ">Development</h1>
                                                <ul className="space-y-2">
                                                    <li className="cursor-pointer text-black/80 hover:text-primary1">Car 1 Development</li>
                                                    <li className="cursor-pointer text-black/80 hover:text-primary1">Car 2 Development</li>
                                                    <li className="cursor-pointer text-black/80 hover:text-primary1">Car 3 Development</li>
                                                </ul>
                                                 </div>
                                            <div> 
                                            <img src={imgNav2}  className="rounded-b-3xl absolute top-0  h-[200px] mr-4 " />    
                                             </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </li>
                        <li><a href="#" className="px-3 py-1">ContactUs</a></li>
                        <li className="flex items-center gap-4">
                            <div>
                                <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md p-2 hover:bg-violet-950 bg-primary1"/>
                            </div>
                            <div className="md:hidden lg:block">
                                <p>Call Us On</p>
                                <a href={`tel: +98 9106765667`}>+98 9106765667</a>
                            </div>
                        </li>
                       
                        {/*Light and darkmood swecher*/}
                        {
                            theme === 'dark' ? (
                            <BiSolidSun className="text-4xl ml-2 border rounded-full border-white p-1" onClick={()=> setTheme('light')}/>
                        ):(
                        <BiSolidMoon  className="text-4xl ml-2 border rounded-full border-white p-1" onClick={()=>setTheme('dark')}/>
                    )
                        }
                   </ul>
                </div>


                {/*mobile section*/}
                <div className="flex items-center gap-4 md:hidden">
                {
                            theme === 'dark' ? (
                            <BiSolidSun className="text-3xl pl-2" onClick={()=> setTheme('light')}/>
                        ):(
                        <BiSolidMoon  className="text-3xl pl-2" onClick={()=>setTheme('dark')}/>
                    )
                        }
                        {
                            showMenue ? (
                                <HiMenuAlt1 className="cursor-pointer transition-all size-6" 
                                onClick={toggleMenue}
                                />
                            ):(
                                <HiMenuAlt3 className="cursor-pointer transition-all size-6" 
                                onClick={toggleMenue}
                                />
                            )
                        }
                    
                </div>
            </nav>
        </header>
        {/*mobile menue section*/}
        <ResponsiveMenue showMenue={showMenue}/>
        </>
    )
}