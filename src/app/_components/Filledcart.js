/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import { useSelector } from 'react-redux';

const Filledcart = () => {
    const router = useRouter();
    const itemsinCart = useSelector((state) => state?.counter?.addedItems);
    const totalAmount = useSelector((state) => state?.counter?.Total);
    return (<div>
        {/* <Nav/> */}
        <div className='max-w-[1080px] mx-auto my-0 p-5'>
            <section className="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center">
                        <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
                    </div>

                    <div className="mx-auto mt-8 max-w-2xl md:mt-12">
                        <div className="bg-white shadow">
                            <div className="px-4 py-6 sm:px-8 sm:py-10">
                                <div className="flow-root">
                                    <ul> {itemsinCart.map((ele, inx) => {
                                        return (
                                            <div key={inx}>
                                                <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                                                    <div className="shrink-0">
                                                        <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={ele.img} alt={ele.name} />
                                                    </div>

                                                    <div className="relative flex flex-1 flex-col justify-between">
                                                        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                                            <div className="pr-8 sm:pr-5">
                                                                <p className="text-base font-semibold text-gray-900">{ele.name}</p>
                                                                <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p>
                                                            </div>

                                                            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                                                <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right"> ${ele.price}</p>

                                                                <div className="sm:order-1">
                                                                    <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                                                        <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">1</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">

                                                        </div>
                                                    </div>
                                                </li>
                                            </div>)
                                    })}
                                    </ul>
                                </div>


                                <div className="mt-6 flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">Total</p>
                                    <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">USD</span> $ {totalAmount}</p>
                                </div>

                                <div className="mt-6 text-center">
                                    <Link href={"/checkout"}>  <button type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">

                                        Checkout <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>

                                    </button>
                                    </Link>
                                </div>
                            </div>
                            <button onClick={() => router.push("/")} className='font-medium text-gray-800 hover:text-indigo-500 p-4 w-full text-center'> Continue Shopping <span> →</span></button>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    </div>)




}

export default Filledcart
