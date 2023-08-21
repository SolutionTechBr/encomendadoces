import React from 'react'
import CountUp from 'react-countup';

const Card1 = ({ title, description, image, onClick }) => {
    return (
      <div data-aos="zoom-in" className='w-fit'>
        <div className='border-[1px] border-gray-800 hover:border-gray-700 rounded-2xl w-[21rem] p-5 hover:scale-[102%] z-0 hover:z-10 bg-[#0a0a0a] transition-all delay-[30ms] ease-in-out'>
          <div className='h-[10rem] rounded flex items-center justify-center overflow-hidden bg-green-500 mb-5'>
            <img loading='lazy' className='w-auto h-[13rem] bg-cover bg-center' src={image} alt={title} onClick={onClick} />
          </div>
          <div>
            <h3 className='text-base font-semibold'>{title}</h3>
            <p className='text-gray-500 text-sm font-medium leading-5 mt-1'>
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  };

const Card2 = ({ link, image, title, company }) => {
    return (
        <div data-aos="zoom-in" className='rounded-2xl w-[21rem] p-5 hover:scale-[102%] z-0   transition-all delay-[30ms] ease-in-out'>
            <a href={link} target='_blank' className='h-[10rem] flex items-center justify-center overflow-hidden bg-green-500 mb-5 rounded-xl'>
                <img loading='lazy' className='w-auto h-[13rem] bg-cover bg-center rounded-lg' src={image} alt={title} />
            </a>
            <div className='text-center -mt-1'>
                <h3 className='text-lg font-semibold'>{title}</h3>
                <p className='text-sky-500 font-medium'>{company}</p>
            </div>
        </div>
    )
}


const HighlightCard = ({ type, data, icon }) => {
    return (
        <div data-aos="fade-up" className='rounded-2xl w-[16rem] p-5 hover:scale-[102%] z-0 hover:z-[5]  transition-all delay-[30ms] ease-in-out border border-gray-900 bg-[#0c0c0c]'>
            <div>
                {icon}
            </div>
            <h3 className='text-3xl font-semibold mt-3'>
                <CountUp end={data} enableScrollSpy={true} />+
            </h3>
            <p className='text-gray-500 font-medium'>{type}</p>
        </div>
    )
}


export { Card1, Card2, HighlightCard };