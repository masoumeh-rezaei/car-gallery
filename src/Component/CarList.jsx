import car1 from '../assets/car4.png'
import car2 from '../assets/car33.png'
import car3 from '../assets/a car2.png'
import car4 from '../assets/car6.png'

export default function CarList(){
    const CarsList=[
      
        {
            id:1,
            name:'BMW',
            price: 190,
            img:car1,
            aosDelay:'0'
        },
        {
            id:2,
            name:'BNZ',
            price: 500,
            img:car2,
            aosDelay:'500'
        },
        {
            id:3,
            name:'KIA',
            price: 890,
            img:car3,
            aosDelay:'1000'
        },
        {
            id:4,
            name:'KIA',
            price: 890,
            img:car4,
            aosDelay:'1500'
        },
        
       
    ]
    return(
        <>
        <div className="pb-10 pt-12 bg-white dark:bg-gray-800 dark:text-white">
            <div className="container m-auto">
                {/*heading*/}
                <h1 data-aos='fade-up' className="text-3xl sm:text-4xl font-semibold mb-3 mystery-quest-regular px-2">Products</h1>
                <p data-aos='fade-up' className="text-sm pb-5 px-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse harum deleniti, magnam obcaecati totam ex.

                </p>
                {/*carListing*/}
                <div>
                    <div data-aos='zoom-in' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                        {
                            CarsList.map((car)=>(
                                <div key={car.id} className="space-y-3 border-2 border-gray-300 hover:border-blue-500 p-3 rounded-xl relative group  m-5">
                                    <div className=" w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700">
                                        <img src={car.img} alt="" />
                                    </div>
                                    <div className="space-y-2">
                                        <h1 className="text-blue-500 font-semibold">{car.name}</h1>
                                        <div className="flex justify-between items-center font-semibold ">
                                            <p>${car.price}</p>
                                            <a href="#">Details</a>
                                        </div>
                                    </div>
                                    <p className="text-xl font-semibold absolute top-0 left-3 ">
                                        12Km
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}