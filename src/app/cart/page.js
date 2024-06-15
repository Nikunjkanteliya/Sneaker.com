/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useRouter } from 'next/navigation'; // Import the useRouter hook
import Emptycart from '../_components/Emptycart';
import Filledcart from '../_components/Filledcart';
const Cart = () => {
    const totalAmount = useSelector((state) => state?.counter?.Total);
    // useEffect(() => { console.log(!window.location.href.includes("/cart")) }, [])
    return (
        <>
            {totalAmount > 0 ? (<Filledcart />) : (
                <Emptycart />
            )}
        </>
    );
}

export default Cart;


