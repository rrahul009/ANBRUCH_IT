
import Carausel from '@/components/Carausel'
import ClientTestimonial from '@/components/ClientTestimonial'
import CollaborateContact from '@/components/CollaborateContact'
import CompanyAddress from '@/components/CompanyAddress'
import CountryCustomer from '@/components/CountryCustomer'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import New1 from '@/components/New1'
import OurClient from '@/components/OurClient'
import OurFeature from '@/components/OurFeature'
import OurServices from '@/components/OurServices'
import OurPartner from '@/components/Partner'
import Partner from '@/components/Partner'
import TechRecruit from '@/components/TechRecruitmentSerives'
import React from 'react'

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Carausel/>
            <TechRecruit/>
            <OurPartner/>
            <OurClient/>
          
            {/* <Partner/> */}
            <OurServices/>
            <New1/>
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
