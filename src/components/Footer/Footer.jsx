import { Link } from 'react-router-dom'
import {   FaInstagram,  FaFacebook, FaWhatsapp } from 'react-icons/fa'
const Footer = () => {
  const date = new Date;
  const year = date.getFullYear();
  return (
    <div className="bg-[#010101] text-sm w-[100%] mt-[10rem]">

      <div className="mb-10 w-[90%] grid gap-2 md:gap-4 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-[auto] items-start justify-items-center">

        <div data-aos="fade-up" className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-1 md:order-1 lg:order-1'>

          <Link to="/">
            <img src="/images/logo.nome.png" alt="logo" className='h-40 mb-2 w-auto' />
          </Link>

          <div className='flex gap-10 py-4 '>
            <a style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/malimpensadoces/" >
              <FaInstagram className='transition ease-in delay-50 text-red-800 visited:text-red-800 hover:text-red-600 hover:scale-[110%]' size={30} />
            </a>
            <a style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/malimpensadoces/" >
              <FaFacebook className='transition ease-in delay-50  hover:scale-[110%]' size={30} />
            </a>
            <a style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" href="https://whatsapp.com/malimpensadoces" >
              <FaWhatsapp className='transition ease-in delay-50 text-red-800 visited:text-red-800 hover:text-sky-600 hover:scale-[110%]' size={30} />
            </a>
          </div>

        </div>


        <div data-aos="fade-up" className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-2 md:order-2 lg:order-2'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-red-800 mr-3'>|</h1><h1 className='text-lg font-semibold'>Links Úteis</h1></div>
          <ul className='mt-4 flex flex-col gap-2 text-base'>
            <li className='hover: text-red-800'><Link style={{ textDecoration: "none" }} to="/news"><p className='text-gray-400 hover:text-red-800'>Serviços</p></Link></li>
            <li className='hover: text-red-800'><Link style={{ textDecoration: "none" }} to="/events"><p className='text-gray-400 hover:text-red-800'>Pacotes</p></Link></li>
            <li className=' hover: text-red-800'><Link style={{ textDecoration: "none" }} to="/team"><p className='text-gray-400 hover:text-red-800'>Parceiros</p></Link></li>
            <li className=' hover: text-red-800'><Link style={{ textDecoration: "none" }} to="/gallery"><p className='text-gray-400 hover:text-red-800'>Clientes</p></Link></li>
            <li className='hover: text-red-800'><Link style={{ textDecoration: "none" }} to="/admin"><p className='text-gray-400 hover:text-red-800'>Tecnologias</p></Link></li>
          </ul>
        </div>

        <div data-aos="fade-up" className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-2 md:order-2 lg:order-2'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-red-800 mr-3'>|</h1><h1 className='text-lg font-semibold'>Deve verificar</h1></div>
          <ul className='mt-4 flex flex-col gap-2 text-base'>
            <li className='hover: text-red-800'><Link style={{ textDecoration: "none" }} to="/">
              <p className='text-gray-400 hover:text-red-800'>Serviços Web</p></Link></li>
            <li className='hover: text-red-800'><Link style={{ textDecoration: "none" }} to="/"><p className='text-gray-400 hover:text-red-800'>Serviço Profissional</p></Link></li>
            <li className=' hover: text-red-800'><Link style={{ textDecoration: "none" }} to="/"><p className='text-gray-400 hover:text-red-800'>Consultoria Free</p></Link></li>
            <li className=' hover: text-red-800'><Link style={{ textDecoration: "none" }} to="/"><p className='text-gray-400 hover:text-red-800'>Desenvolvimento do Négocio</p></Link></li>
            <li className=' hover: text-red-800'><Link style={{ textDecoration: "none" }} to="/"><p className='text-gray-400 hover:text-red-800'>Oportunidades de Crescimento</p></Link></li>
          </ul>
        </div>

        <div data-aos="fade-up" className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-3 md:order-3 lg:order-3 text-base'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-red-800 mr-3'>|</h1><h1 className='text-lg font-semibold'>Contatos</h1></div>
          <p className='max-w-[16rem] pt-4 text'>Rio Claro / SP - Brasil</p>
          <p className='pt-2'>Telefone : <a style={{ textDecoration: "none" }} href="tel:(19)99937-2133" className='text-red-800ml-2 font-semibold'><span className='hover:text-gray-400 text-red-800'>(19) 99813-3186</span></a></p>
          <p className='pt-2'>E-mail : <a style={{ textDecoration: "none" }} href="mailto:ontato@solutiontech.dev" className='text-red-800ml-2 font-semibold'><span className='hover:text-gray-400 text-red-800'>contato@malimpensadoces.com</span></a></p>
        </div>

      </div>

      <div className="w-[90%] m-[auto] bg-gray-800 h-[1px]"></div>
      <div className="m-[auto] pb-8 pt-5 text-gray-600 font-medium text-sm flex flex-col md:flex-row lg:flex-row justify-between items-center w-[90%]">
        <p>
          © {year} . Todos os direitos reservados.
        </p>
        <p>
          Desenhado e Desenvolvido por <a style={{ textDecoration: "none" }} className="font-medium  text-red-800" href="#">
            <span className='text-red-800'>Solution Tech</span>
          </a>.
        </p>
      </div>
    </div>
  )
}

export default Footer
