import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'

const MainPage = () => {
  return (
   <React.Fragment>
    <section>
        <div className='wrapper'>
          <Navbar/>
            <Hero/>
            
        </div>
    </section>
   </React.Fragment>
  )
}

export default MainPage