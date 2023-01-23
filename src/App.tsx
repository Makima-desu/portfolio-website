import { useState } from 'react'

import Aboutme from './components/aboutme'
import Legend from './components/legend'
import Introduction from './components/introduction'
import Tech from './components/Technologies'
import Projects from './components/projects'

function App() {
  

  return (
    // the app
    <div className='w-full h-screen p-4'>
      <div className='relative w-full h-full flex flex-col gap-20'>
        {/* about me component */}
        <div className=' place-items-center right-0 top-0 flex place-content-center gap-10 lg:gap-8 sm:flex-row flex-col p-4'>
          <Aboutme/>
          <Tech/>
        </div>
        {/* main page */}
        <div className='w-full flex flex-col gap-32'>
          <Introduction/>
          <Projects/>
          <div className='text-center mb-2'>
            <p className='text-teal-100 font-bold drop-shadow'>Made by <a href='https://github.com/makima-desu' target={'_blank'} className='group'><span className='bg-bottom bg-no-repeat bg-gradient-to-r from-teal-500 to-teal-500 transition-all duration-200 bg-[length:20%_2px] group-hover:bg-[length:100%_2px]'> Makima-desu</span></a>
              </p>
              <p className='text-teal-800 font-bold drop-shadow'>
                Vite, React, Tailwind
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
