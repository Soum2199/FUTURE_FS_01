// const reportWebVitals = onPerfEntry => {
//   if (onPerfEntry && onPerfEntry instanceof Function) {
//     import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
//       getCLS(onPerfEntry);
//       getFID(onPerfEntry);
//       getFCP(onPerfEntry);
//       getLCP(onPerfEntry);
//       getTTFB(onPerfEntry);
//     });
//   }
// };

// export default reportWebVitals;


import React from 'react'
import Forms from './Forms';
// import Home from './Home';
import Profile from './Profile';
function Home() {
  return (
    <>
    <p class="text-warning bg-dark text-center flex justify-around text-xl"><a href="/" className='hover:text-amber-300 hover:text-shadow-xs hover:text-[22px]'>Home</a>  <a href="/about" className='hover:text-amber-300 hover:text-shadow-xs hover:text-[22px]'>About</a> <a href='https://drive.google.com/file/d/12ozdUK4RRUZsCqTZiU_wXngDuGAmd7VL/view' role="button" class="btn btn-outline-warning rounded-none border-lime-500 m-1 hover:text-amber-800">Download Resume</a></p>
<p id='Hello' className='text-center font-bold text-5xl text-cyan-400 font-sans'>Hello, <i class="fa-solid fa-hand fa-shake" style={{color: "#f2c41eeb", textShadow: "2px -2px 8px gold"}}></i></p>
<Profile/>
<br/>
<Forms/>
<br/>
<footer className="bg-slate-300 text-fuchsia-800">
  <strong className='capitalize text-indigo-800 text-3xl'>get in touch: </strong><br/>
  <ul style={{padding: "6px", color: "navy"}} className='flex flex-wrap justify-evenly'>
  <li><i class="fa-brands fa-linkedin hover:text-blue-700 hover:text-lg"></i> <a className='hover:underline hover:text-blue-900' target='_blank' href='https://www.linkedin.com/in/soumya-panigrahi-7b3105287/'>Soumya Panigrahi</a></li>
  <li><i class="fa-brands fa-github hover:text-slate-700 hover:text-lg"></i> <a className='hover:underline hover:text-slate-900' target='_blank' href='https://github.com/Soum2199'>Soum2199</a></li>
  <li><i class="fa-brands fa-facebook hover:text-blue-600 hover:text-lg"></i> <a className='hover:underline hover:text-sky-900' target='_blank' href='https://www.facebook.com/soumya.panigrahi.2105?mibextid=ZbWKwL'>Soumya Panigrahi</a></li>
  <li><i class="fa-brands fa-square-whatsapp hover:text-green-500 hover:text-lg"></i> <a className='hover:underline hover:text-green-900' target='_blank' href='https://wa.me/+919819562430'>+91 98195 62430</a></li>
  <li><i class="fa-regular fa-envelope hover:shadow-lg hover:text-lg"></i> <a className='hover:underline hover:text-black' target='_blank' href='soumya.subrat17@siesgst.ac.in'>soumya.subrat17@siesgst.ac.in</a></li>
</ul>
<br/>
  &copy; <span className="text-xl font-semibold"> Soumya Subrat Panigrahi</span>,   2025 All rights reserved
</footer>
    </>
  )
}

export default Home