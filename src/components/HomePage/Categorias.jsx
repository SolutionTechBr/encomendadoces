import React from 'react'
import { Card1, Card2 } from '../Cards/Card'


const Categorias = () => {
  const CategoriasData = []

  return (
    <div>
      <div className='my-10 flex flex-wrap gap-10 items-center justify-evenly'>
        {CategoriasData.map((data) => (
          <Card1 key={data.id} title={data.title} description={data.description} image={data.image} />
        ))}
      </div>

      <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
        <Card2 title="Google" company={"Bolo de Pote"} image={"./images/google.jpg"} link={"/produtos"}/>
        <Card2 title="Amazon" company={"Cone Trufado"} image={"./images/amazon.jpg"} link={"/produtos"} />
        <Card2 title="Microsoft" company={"Fatia de bolo"} image={"./images/microsoft.png"} link={"/produtos"}/>
        <Card2 title="Google" company={"Pudin"} image={"./images/google.jpg"} link={"/produtos"}/>
        <Card2 title="Amazon" company={"Barra de Chocolate"} image={"./images/amazon.jpg"}  link={"/produtos"}/>
        <Card2 title="Microsoft" company={"Docinho para festa"} image={"./images/microsoft.png"}  link={"/produtos"}/>
      </div>
    </div>
  )                                               
}

export default Categorias

