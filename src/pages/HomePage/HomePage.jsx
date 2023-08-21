import './HomePage.scss'
import Categorias from '../../components/HomePage/Categorias';
import React from 'react';


const HomePage = () => {
  document.title = 'Malimpensa Doces | Home';
  return (
    <div className='pt-16 bg-white'>
      <div className=' my-[10rem] lg:gap-1 md:gap-2 gap-6 flex-col text-5xl '>
        <div className="text-grande">
            <h1  data-aos="zoom-in" className=' bg-clip-text bg-gradient-to-r  from-red-800 to-red-600'>Delícias que aquecem o coração</h1>
            <h1 data-aos="zoom-in" className='text-transparent z-10 lg:text-16xl md:text-10xl text-10xl mx-80 bg-clip-text bg-gradient-to-r from-red-800 to-red-600'>Feitas com Paixão </h1> 
          </div>
          <div class='text-pequeno'>
            <h1 data-aos="zoom-in" className=' from-red-800 to-red-600' >
              tornando o dia das pessoa melhor a cada dia
            </h1>
          </div>
          <div data-aos="fade-up" class='imagem'>
            <img data-aos="fade-up" src="./images/bolodedepote.jpeg" />
          </div>
      </div>
      <div className='lg:mx-[4rem] md:mx-[3rem] mx-[2rem]'>
      <Categorias/>
      </div>
    </div>
  )
}



export default HomePage
