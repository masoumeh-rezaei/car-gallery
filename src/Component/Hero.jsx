import img1 from '../assets/man with a car.png'
import img2 from '../assets/car3.png'

export default function Hero(){
    return(
        <>
        <div className="h-[700px] md:h-[500px]  bg-navbar pt-20">
            <section className='container m-auto flex flex-col items-center justify-between '>
                <div className='grid grid-cols-1 items-center gap-8 md:grid-cols-2 text-white'>
                    {/*hero text*/}
                        <div className='flex flex-col items-center text-center  gap-4 md:items-start md:text-left '>
                           <div className='flex flex-col '>
                           <h1 className='mystery-quest-regular text-7xl font-bold text-slate-300  '>
                               

                            
                            Modern</h1>
                             <h1 className='text-4xl ml-60 mystery-quest-regular '>
                               Car</h1>
                           </div>
                             <p className='text-slate-200'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Reprehenderit qui maiores, accusantium quidem sapiente cum itaque
                                  repellat a at dicta voluptate saepe illum commodi fugit voluptatum ullam
                                   rem dolore animi eligendi incidunt veniam minima nobis molestias nulla. Unde 
                                
                            </p>
                            <div className='space-x-3'>
                                <button className='btn-primary'>click here</button>
                                <button className='btn-outline'>Log In</button>
                            </div>
                        </div>
                    {/*hero img*/}
                    <div   className='mx-auto p-4   flex justify-center items-center md:max-w-[400px] max-w-[300px]'>
                        <img src={img2} alt="" className='flex items-center justify-center border-4 border-slate-200 md:rounded-tl-[200px] rounded-tl-[100px]  md:rounded-br-[200px] rounded-br-[100px] md:p-7 -m-8 md:m-0' />
                    </div>
                </div>
            </section>
        </div>
        
        
        </>
    )
}