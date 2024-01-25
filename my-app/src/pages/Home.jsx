import React from 'react'
import Cards from '../components/Cards/Cards'
import {Helmet} from "react-helmet";
import Section1 from '../components/Section1/Section1';
import Section2 from '../components/Section1/Section2/Section2';
import Section3 from '../components/Section3/Section3';
import Section4 from '../components/Section4/Section4';

const Home = () => {
  return (
    <div>
           <Helmet>
                <meta charSet="utf-8" />
                <title>home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Section1/>
            <Section2/>
            <Section3/>
            <Cards/>
            <Section4/>
      
    </div>
  )
}

export default Home
