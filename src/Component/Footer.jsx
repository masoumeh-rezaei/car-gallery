import {  FaArrowRight, FaFacebook, FaGithub, FaInstagram, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const footerLinks=[
    {
        id:1,
        title:'Home',
        link: '/#'
    },
    {
        id:2,
        title:'About',
        link: '/#about'
    },
    {
        id:3,
        title:'Contacts',
        link: '/#contact'
    },
    {
        id:4,
        title:'Blog',
        link: '/#blog'
    },
]
export default function Footer(){
    return(
        <div className=" bg-gray-100 dark:bg-slate-900  rounded-t-3xl dark:text-white -mt-15">
            <div className="container m-auto mt-10">
                <div className="grid md:grid-cols-3 py-5 mt-10">
                    {/*company details*/}
                    <div className="py-8 px-4">
                        <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 gap-3 flex items-center mystery-quest-regular">Car Rental</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cum cumque obcaecati quas dicta inventore!

                        </p>
                        <br/>
                        <div className="flex items-center gap-3">
                            <FaLocationArrow />
                            <p>Paradise, Utter Polish</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMobileAlt />
                            <p>+98 9106765667</p>
                        </div>
                       {/* social handles*/}
                         <div className="flex items-center gap-3 mt-6">
                            <a href="#">
                                <FaInstagram className="text-3xl hover:text-blue-400 duration-300"/>
                            </a>
                            <a href="#">
                                <FaFacebook className="text-3xl hover:text-blue-400 duration-300"/>
                            </a>
                            <a href="#">
                                <FaGithub className="text-3xl hover:text-blue-400 duration-300"/>
                            </a>
                         </div>
                    </div>
                    {/*navbar link*/}
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        {/*first col*/}
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl sm:text-2xl font-bold sm:text-left text-justify mb-3 mystery-quest-regular">Important Links</h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        footerLinks.map((data)=>(
                                           
                                                <li className="cursor-pointer hover:text-violet-400 duration-300 relative pl-10" key={data.id}>
                                                    <span className="mr-2 absolute left-4 top-1 "><FaArrowRight/> </span>
                                                    <a href={data.link}>
                                                        {data.title}
                                                    </a>
                                                </li>
                                            
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        {/*second col*/}
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl sm:text-2xl font-bold sm:text-left text-justify mb-3 mystery-quest-regular">Important Links</h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        footerLinks.map((data)=>(
                                           
                                                <li className="cursor-pointer hover:text-violet-400 duration-300 relative pl-10" key={data.id}>
                                                    <span className="mr-2 absolute left-4 top-1 "><FaArrowRight/> </span>
                                                    <a href={data.link}>
                                                        {data.title}
                                                    </a>
                                                </li>
                                            
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        {/*thirs col*/}
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl sm:text-2xl font-bold sm:text-left text-justify mb-3 mystery-quest-regular">Important Links</h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        footerLinks.map((data)=>(
                                           
                                                <li className="cursor-pointer hover:text-violet-400 duration-300 relative pl-10" key={data.id}>
                                                    <span className="mr-2 absolute left-4 top-1 "><FaArrowRight/> </span>
                                                    <a href={data.link}>
                                                        {data.title}
                                                    </a>
                                                </li>
                                            
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}