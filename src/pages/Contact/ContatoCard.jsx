import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const ContatoCard = ({ member }) => {
    return (
        <div data-aos="zoom-in" className='border border-gray-800 bg-[#0f0e0e] hover:bg-[#131212] p-5 rounded-3xl transition-all delay-[30ms] ease-in-out hover:border-gray-700 hover:scale-[101%] border-b-4 border-b-sky-700 hover:border-b-sky-500' id="Contato_main_1">
            

            <div className='text-xl'>
                {member.name}
            </div>
            <div className='text-sky-500 font-medium text-lg'>
                {member.position}
            </div>
            <div className='text-gray-400 my-3 text-sm'>
                {member.about}
            </div>
            <div className='py-3'>
                <a href={`mailto:${member.email}`} >
                    <span className='text-sky-400 px-4 py-1.5 rounded-xl bg-sky-900'>{member.email}</span>
                </a>
            </div>

            <div className='flex gap-3 items-center justify-center mt-5' id="Contato_icon">
                <a className='hover:scale-105 transition-all delay-[20ms] ease-in' href={member.github}>
                    <FaWhatsapp size={22} />
                </a>
                <a className='hover:scale-105 transition-all delay-[20ms] ease-in' href={member.twitter}>
                    <FaFacebook className='text-sky-500' size={22} />
                </a>
                <a href={member.instagram}>
                    <FaInstagram className='text-rose-500' size={22} />
                </a>
            
            </div>
        </div>
    )
}

export default ContatoCard