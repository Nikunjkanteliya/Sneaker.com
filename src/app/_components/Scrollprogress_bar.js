import React, { useEffect, useState } from 'react'


const ScrollProgressBar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById("myBar") !== null ? document.getElementById("myBar").style.width = scrolled + "%" : null
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="w-full bg-[#fff] h-[8px] fixed top-0">
                <div className="h-[8px] bg-gray-300 w-[0px] rounded-r-[40px]" id="myBar"></div>
            </div>
        </div>
    );
};

export default ScrollProgressBar;
