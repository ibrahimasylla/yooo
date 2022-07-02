import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import NavbarStyleFive from "@/components/_App/NavbarStyleFive";
import ServicesArea  from 'components/ITStartup/ServicesArea';



import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import * as Icon from 'react-feather';
 
const Services5 = () => {
    return (
        <>
      < NavbarStyleFive/>
            
            
            <ServicesArea/>

           

            <Footer />
        </>
    )
}

export default Services5;