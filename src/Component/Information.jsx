import bgImg from '../assets/bg2.jpg'

export default function Information(){
    const backgroundStyle={
        backgroundImage:`url(${bgImg}) `,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundAttachment:'fixed',
        height:'100%',
        width:'100%',
    }
    const testimonialData=[
      
        {
            id:1,
            name:'Robert Robin',
            text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam necessitatibus voluptatibus totam blanditiis pariatur corrupti rerum vero consectetur dolor accusamus!',
            img:'https://picsum.photos/101/101',
        },
        {
            id:2,
            name:'Robert Robin',
            text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam necessitatibus voluptatibus totam blanditiis pariatur corrupti rerum vero consectetur dolor accusamus!',
            img:'https://picsum.photos/101/102',
        },
        {
            id:3,
            name:'Robert Robin',
            text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam necessitatibus voluptatibus totam blanditiis pariatur corrupti rerum vero consectetur dolor accusamus!',
            img:'https://picsum.photos/101/103',
        },
        {
            id:4,
            name:'Robert Robin',
            text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam necessitatibus voluptatibus totam blanditiis pariatur corrupti rerum vero consectetur dolor accusamus!',
            img:'https://picsum.photos/101/104',
        },
       
    ]
    
    return(
        
        <div style={backgroundStyle} className='-my-20 ' >
            <div className='bg-white/30 dark:bg-gray-800/70 pb-20'>
                <div className='container m-auto'>
                {/*header section*/}
                <div>
                    <h1 className='text-6xl font-bold text-center mystery-quest-regular dark:text-white pt-10'>Testiminial</h1>

                </div>
                {/*slider section */}
                <div data-aos='zoom-out' className='my-6 grid lg:grid-cols-4 md:grid-cols-2'>
                    
                        {
                            testimonialData.map((item,id)=>(
                                <div className='my-6 grid ' key={id}>
                                    <div className='flex flex-col gap-4 shadow-lg py-8 mx-4 rounded-xl bg-gray-200/90 dark:bg-gray-600/80 relative'>
                                        <div className='mb-4 px-3'>
                                            <img src={item.img} className='rounded-full w-20 h-20 ' />
                                        </div>
                                        {/*content section*/}
                                        <div>
                                            <div className='flex flex-col px-4'>
                                                <p className='text-xs font-bold text-gray-500 dark:text-gray-100'>{item.text}</p>
                                                <h1 className='text-xl font-bold text-black/80 mystery-quest-regular dark:text-gray-100'>{item.name}</h1>
                                            </div>
                                        </div>
                                        <p className='absolute top-0 right-0 font-bold text-black/20 text-9xl font-serif'>
                                            ,,
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    
                </div>
                </div>
            </div>
        </div>
        
    )
}