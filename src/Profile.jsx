import React, {useState, useEffect} from 'react'
import axios from "axios"
import Projects from './Pros';

function Profile() {
  var changes = [
    "A fullStack developer",
    "Web developer",
    "Junior software engineer",
    "Building applications"
  ];

const [edudetails, setEduDetails] = useState([])
const [index, setIndex] = useState(0);

  function changing() {
    setIndex((index+1) % changes.length)
  }

  useEffect(() => {
    axios.get("http://localhost:7000/")
    .then(output => {
      // console.log(output)
      console.log(output.data)
      setEduDetails(output.data)
      console.log(edudetails)
    })
    .catch(error => console.log(error))
  
  }, [])
  
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Tailwind", "Bootstrap", "Node js", "express js", "mongoDB", "JSON"
  ]
  return (
    <>
    <h1 className='text-4xl text-gray-100 font-mono'>I am Soumya Panigrahi, <br /> <em className='capitalize text-rose-500 cursor-default' onClick={e => changing()}>{changes[index]}</em></h1>
    <div className='flex items-center justify-center'>
      <img src="https://media.istockphoto.com/id/1288284550/photo/woman-studying-at-home.jpg?s=1024x1024&w=is&k=20&c=3uzROV5QBSCD0FCK4QFHXlOipF4n6vnRbFvacoT3Gyw=" alt="my profile"  className='h-40 w-40 border-x-2 items-center justify-around shadow-md rounded-full shadow-slate-200'/>
      <p className='p-1 w-2/5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur eaque porro molestiae pariatur facere, libero tenetur, velit deleniti potassimus calciuma heydrognenel</p>
    </div>
    
      <h2 className='p-2 text-2xl font-bold bg-gradient-to-r from-fuchsia-200 to-indigo-300 bg-clip-text text-transparent inline-block'>About</h2>
      <p className='w-8/12 text-center mx-auto'>A Junior Software Engineer with 6 months of hands-on experience in full-stack web development, specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) and Java. Skilled in developing dynamic web applications, writing clean and maintainable code, and collaborating in agile environments. Proficient in HTML, CSS, JavaScript, and REST API integration. Demonstrated ability to troubleshoot, debug, and optimize code for performance. Eager to contribute to scalable software solutions and grow as a full-stack developer in a challenging, tech-driven environment.</p>
      <hr />
      <h2 className='p-2 text-2xl font-bold bg-gradient-to-r from-fuchsia-200 to-indigo-300 bg-clip-text text-transparent inline-block'>Education</h2>
      
<table className="w-10/12 border-collapse border border-gray-300 text-center text-lg mx-auto">
  <thead>
    <tr>
      <th className="border text-fuchsia-200 border-gray-200 px-4 py-2">School</th>
      <th className="border text-fuchsia-200 border-gray-200 px-4 py-2">Location</th>
      <th className="border text-fuchsia-200 border-gray-200 px-4 py-2">Year</th>
    </tr>
  </thead>
  <tbody>
    {edudetails.map((item, idx) => (
      <tr key={idx} className="text-lg">
        <td className="border border-teal-100 px-3 py-[6px]"><cite>{item.school}</cite></td>
        <td className="border border-teal-100 px-3 py-[6px]">{item.location}</td>
        <td className="border border-teal-100 px-3 py-[6px]"><abbr title={item.year}>{item.year}</abbr></td>
      </tr>
    ))}
  </tbody>
</table>

      <hr />
      <h2 className='p-2 text-2xl font-bold bg-gradient-to-r from-fuchsia-200 to-indigo-300 bg-clip-text text-transparent inline-block'>Skills</h2>
      <span className='flex justify-around'>
  {skills && skills.length > 0 ? (
    skills.map((skill, index) => (
      <div key={index}>
        <button type="button" className="btn btn-info hover:bg-orange-500 hover:text-slate-950 border-pink-400 capitalize border-3 hover:scale-105">
          {skill}
        </button>
      </div>
    ))
  ) : (
    <div>No skills available</div>
  )}
</span> <br /> <hr />
  <a href="/about">
    <h2 className='p-2 text-2xl font-bold bg-gradient-to-r from-fuchsia-200 to-indigo-300 bg-clip-text text-transparent inline-block'>Projects</h2>
  </a>
  <Projects/>
    </>
  )
}

export default Profile
