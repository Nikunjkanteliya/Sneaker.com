/* eslint-disable react/no-deprecated */
// pages/checkout.js
"use client"

import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const CheckoutPage = () => {
    const totalAmount = useSelector((state) => state?.counter?.Total);
    const router = useRouter();
    const [countdown, setCountdown] = useState(30);


    useEffect(() => {
        // Validate totalAmount to ensure it's a valid number
        const amount = totalAmount ?? 0;

        // Countdown logic
        const timer = setInterval(() => {
            setCountdown((prevCount) => {
                if (prevCount <= 1) {
                    clearInterval(timer);
                    router.push("/");
                    return 0;
                }
                return prevCount - 1;
            });
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(timer);
    }, [totalAmount, router]);

    return (
        <div className='max-w-[1080px] mx-auto my-0 p-5'>

            <h1 className='text-center text-[32px] font-bold p-5'>Scan To Pay</h1>

            <div className='flex justify-center items-center'>
                <div className='shadow-xl p-5 bg-white rounded-xl'>  <QRCode value={`You shopped for $${totalAmount}`} className='shadow-xl' /></div>
              
            </div>
            <div className='text-center mt-5'>
                <p className='text-lg'>Redirecting to homepage in {countdown} seconds...</p>

            </div>
        </div>
    );
};

export default CheckoutPage;
