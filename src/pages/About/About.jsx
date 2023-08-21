import './About.scss'
import Heading from '../../components/Headings/Heading'

const About = () => {

  document.title = 'Malimpensa Doces | Sobre';

  return (
    <div className='pt-16 min-h-screen'>
      <Heading heading="Sobre Malimpensa Doces"></Heading>
      <div className="paragraph-body">
        <p data-aos="fade-up" >
          Welcome to the official website of <span>T.E.S.L.A. Club</span>, the premier club for Electrical Engineering enthusiasts and professionals! Founded in 2021 by a group of bright-minded seniors, under the guidance of our esteemed <span>PI - Dr. Amitesh Sir</span>, T.E.S.L.A. Club is dedicated to fostering public speaking, teamwork, technical excellence, and management skills among its members. Our primary aim is to provide a platform for seniors, juniors, and alumni to come together, learn, grow, and secure rewarding careers in the field of Electrical Engineering.
        </p>
      </div>
    </div>
  )
}

export default About