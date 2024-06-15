"use client"
import React, { useState } from 'react'
import { shoesdata } from '../constants/shoesdata'
import SneakerList from './SneakerList'

const MenShoes = () => {
    const sneakerData = {
        "men-shoes":
            shoesdata['men-shoes']
        ,
        "women-shoes":
            shoesdata['women-shoes']
        ,
        "kids-shoes":
            shoesdata['kids-shoes']
    };

    return (
        <div className='shoes_List'>
            {/* <h1>Sneaker Store</h1> */}
            <SneakerList category="Men's Shoes" sneakers={sneakerData["men-shoes"]} />
            <SneakerList category="Women's Shoes" sneakers={sneakerData["women-shoes"]} />
            <SneakerList category="Kid's Shoes" sneakers={sneakerData["kids-shoes"]} />
        </div>
    )
}

export default MenShoes
