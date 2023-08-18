import React from 'react'
import LineGradient from '../component/LineGradient'
import { motion } from 'framer-motion'

const container = {
    hidden:{},
    visible:{
        transition:{
            staggerChildren:0.2
        }
    }
}

const projectVariant = {
    hidden:{
        opacity:0,scale:0.8
    },
    visible:{opacity:1,scale:1}
}

const Project = ({title})=>{
    const projectTitle = title.split(" ").join("-").toLowerCase()
    const overlaystlye = ` absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`
    return (
        <motion.div variants={projectVariant} className='relative'>
            <div className={overlaystlye}>
                <p className='text-2xl font-playfair'>{title}</p>
                <p className='mt-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam nostrum dolore facilis enim animi dicta sapiente esse ducimus, ab magni quis, laborum assumenda illum accusantium! Mollitia molestiae voluptatem nemo tempora!</p>
            </div>
            <img src={`../assets/${projectTitle}.jpeg`} alt="" />
        </motion.div>
    )
}
const Projects = () => {
  return (
    <section id='projects' className='pt-48 pb-48'>
        {/* heading {}[]*/}

        <motion.div className='md:w-2/4 mx-auto text-center'
                initial="hidden" whileInView={"visible"} viewport={{once:true,amount:0.5}} transition={{delay:0.2 ,duration:0.5}} variants={{hidden:{opacity:0,y: -50},visible:{opacity:1,y:0}}}
                >
                    <div>
                    <p className=' font-playfair font-semibold text-4xl '>
                        MY <span className='text-red'>PRO</span>JECTS
                    </p>
                    </div>
                    <div className='flex justify-center mt-5'>

                        <LineGradient width='w-1/3'/>
                    </div>
                        <p className='mt-10 mb-7 text-base'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ratione aut ut tenetur quos vitae?
                        </p>
                </motion.div>
                <div className='flex justify-center'>
                <motion.div className='sm:grid sm:grid-cols-3'
                initial="hidden" whileInView={"visible"} viewport={{once:true,amount:0.5}} transition={{delay:0.2 ,duration:0.5}} variants={container}
                >
                    <div className='flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        BEAUTIFUL USER INTERFACES
                    </div>
                     <Project title="Project 1"/>
                     <Project title="Project 3"/>
                     <Project title="Project 3"/>
                     <Project title="Project 4"/>
                     <Project title="Project 5"/>
                     <Project title="Project 6"/>
                     <Project title="Project 7"/>
                    <div className='flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'>
                        SMOOTH USER EXPERIENCE
                    </div>
                </motion.div>
                </div>
    </section>
  )
}


export default Projects