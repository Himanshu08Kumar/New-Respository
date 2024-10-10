import React, { useEffect, useState } from 'react'
import detail from "../../detail.json"
import { useLottie } from "lottie-react"
import proj from "../assets/project.json"
import './project.css'

const Projects = () => {
  const options = {
    animationData: proj,
    loop: true,
  };

  const { View } = useLottie(options)
  const [ data, setData ] = useState([]);

  useEffect(()=>{
    setData(detail);
  },[])

  return (
    <div>
      <div className="animation">{View}</div>
      {
        data.map((item) => (
          <div key={item.id}>
            <h1>{item.project}</h1>
            <p>{item.detail}</p>
            <span>{item.Tech_Stack}</span>

          </div>
        ))
      }
      
    </div>
  )
}

export default Projects
