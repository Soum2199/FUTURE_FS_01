import React, {useState, useEffect} from 'react'
import axios from "axios";

function Projects() {
  const [project, setProject] = useState([])

  useEffect(function () {
    axios.get("http://localhost:7000/about")
    .then(result => {
      console.log(result.data)
      setProject(result.data)
    })
    .catch(error => console.log(error))
  }, [])
  return (
    <>
    <div className='flex justify-evenly'>
      { project.map( (i)=> 
       <div class="card text-slate-300 bg-emerald-800 hover:bg-green-600 hover:scale-105 ease-in-out duration-300" style={{width: "18rem"}}>
        <div class="card-body">
      <h5 class="card-title underline font-semibold text-lg">{i.pro_name}</h5>
      <p class="card-text">{i.pro_descript.slice(0, 50)}...</p>
        </div>
        <div class="card-body">
      <a href="/" class="btn btn-primary m-1 px-2 hover:bg-blue-700 rounded-none" role='button'>View Details</a>
      <a href={i.pro_link} target='_blank' class="btn btn-primary m-1 px-2 hover:bg-blue-700 rounded-none" role='button'>Github Repo <i class="fa-brands fa-github text-base"></i></a>
        </div>
      </div>)}
    </div>
    </>
  )
}

export default Projects