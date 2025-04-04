import img1 from '../assets/a car2.png'
export default function About(){
    return(
        <div className=' md:-mt-40 -m-16 dark:bg-gray-800 dark:text-white/70 duration-300 sm:min-h-[600px] sm:grid sm:place-items-center  pt-30 md:p-0'>
            <div className="container m-auto mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center ">
                    <div 
                    data-aos='slide-right'
                    data-aos-duration='1500'
                    >
                        <img src={img1} alt=""  className='sm:scale-105 scale-80  sm:-translate-x-11 max-h-[30ox] drop-shadow-[2px-20px-6px-rgba(0,0,0,0.5)]'/>
                    </div>
                    <div>
                        <div className='space-y-5 sm:p-16 px-4 pb-6 lg:w-[70%] m-auto flex flex-col justify-center items-center  '>
                            <h1 className='text-3xl sm:text-4xl font-bold mystery-quest-regular ' data-aos='fade-up'>About Us</h1>
                            <p className='px-3 text-center' data-aos='fade-up'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem distinctio illum consequuntur. Magnam, explicabo soluta
                            </p>
                            <p className='px-3 text-center'  data-aos='fade-up'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem distinctio illum consequuntur. Magnam, explicabo soluta. 
                            </p>
                            <button data-aos='fade-up' className='btn-outline'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}