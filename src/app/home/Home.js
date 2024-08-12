
import Carausel from '@/components/Carausel'
import ClientTestimonial from '@/components/ClientTestimonial'
import CollaborateContact from '@/components/CollaborateContact'
import CompanyAddress from '@/components/CompanyAddress'
import CountryCustomer from '@/components/CountryCustomer'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import OurFeature from '@/components/OurFeature'
import OurServices from '@/components/OurServices'
import Partner from '@/components/Partner'
import React from 'react'

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Carausel/>
            <Partner/>
            <OurServices/>
            <OurFeature/>
            <CountryCustomer/>
            <ClientTestimonial/>
            <CollaborateContact/>
            <CompanyAddress/>
            <Footer/>



        </div>
    )
}

export default Home
