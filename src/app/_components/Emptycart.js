import React from 'react'
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import Image from 'next/image';
import emptyCart from "../../../public/assets/emptyCart.jpg";
const Emptycart = () => {
    const router = useRouter(); // Initialize the useRouter hook
    return (
        <div className='max-w-[1080px] mx-auto my-0 p-5'>
            <div className='flex justify-center flex-col items-center'><Image src={emptyCart} alt='emptyCart' width={300} height={300} className='mix-blend-darken' />
                <p className='text-[22px] font-[600]'>Your cart is empty!</p>
                <button onClick={() => router.push("/")} className='font-medium text-gray-800 hover:text-indigo-500'> Continue Shopping <span> →</span></button></div>
        </div>
    )
}

export default Emptycart
