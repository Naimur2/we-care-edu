import { locations } from '../components/contactUs/ContactUs'
import React from 'react'
import cn from 'utility/cn'



export default function CustomerCare() {
    const [isShow, setIsShow] = React.useState(false)
    const ref = React.useRef(null)

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsShow(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isShow])

    return (
        <div
            className={cn('fixed bottom-0 right-0 z-50 mb-8 mr-8 flex items-end gap-8')}
            ref={ref}
        >

            <ul className={cn("bg-white rounded-xl shadow-lg overflow-hidden max-h-0 transition-all duration-300 ease-in-out", {
                'max-h-[1000rem]': isShow,
                'overflow-auto': isShow,
            })}>

                <li className='bg-[#A6E4ED] px-4 py-4 font-semibold text-sm sm:text-base lg:text-lg'>
                    Talk to us
                </li>

                {
                    locations.map((phone, index) => (
                        <li
                            key={index}
                            className='gap-2 flex items-center px-4 py-3 w-full min-w-[16rem] border-b border-gray-200 cursor-pointer hover:bg-gray-100'
                        >
                            <div><img src="/icons/phone.svg" alt=""
                                className='h-4 w-4 sm:h-6 sm:w-6 '
                            /></div>
                            <div className="grid gap-2 justify-center">
                                <p className='text-xs sm:text-sm font-semibold text-[#363636]'>{phone.title}</p>
                                <p className='text-[0.625rem] sm:text-xs text-[#363636]'>{phone.telephone}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>


            <button
                onClick={() => setIsShow(!isShow)}
                className={cn('rounded-full shadow-lg p-2 transition-all duration-100 ease-in-out bg-white', {
                    'rotate-45': isShow
                })}
            >
                <img src="/icons/customercare.svg" alt=""
                    className='h-10 w-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 cursor-pointer'
                />
            </button>
        </div>
    )
}
