import React from 'react'
import LineGradient from '../component/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'


const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section id='skills' className='pt-10 pb-24'>
            <div className='md:flex md:justify-between md:gap-16 mt-32'>
                <motion.div className='md:w-1/3'
                initial="hidden" whileInView={"visible"} viewport={{once:true,amount:0.5}} transition={{delay:0.2 ,duration:0.5}} variants={{hidden:{opacity:0,x: -50},visible:{opacity:1,x:0}}}
                >
                    <div>
                    <p className=' font-playfair font-semibold text-4xl mb-5'>
                        MY <span className='text-red'>SKILLS</span>
                    </p>
                    </div>
                        <LineGradient width='w-1/3'/>
                        <p className='mt-10 mb-7 text-base'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam eos magnam optio consectetur dignissimos quia?
                        </p>
                </motion.div>

                <div className=' mt-16 md:mt-0'>
                        {
                            isAboveMediumScreens ? (
                                <div className='relative  z-0 ml-20 before:absolute before:-top-10 before:-left-10  before:w-full  before:h-full before:border-2 before:border-blue  before:z-[-1]'>
                        <img src="assets/skills-image.png" alt="" className='z-10'/>
                    </div>
                            ):(
                                <img src="assets/skills-image.png" alt="" className='z-10'/>
                            )
                        }
                </div>
            </div>

            <div className='md:flex md:justify-between mt-16 gap-32'>
                <motion.div className=' mmd:w-1/3 mt-10'
                initial="hidden" whileInView={"visible"} viewport={{once:true,amount:0.5}} transition={{delay:0.2 ,duration:0.5}} variants={{hidden:{opacity:0,y:50},visible:{opacity:1,y:0}}}
                >
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-playfair font-semibold text-5xl'>01</p>
                            <p className='font-playfair font-semibold text-3xl'>Experience</p>
                        </div>
                        <div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]'/>
                    </div>
                    <p className='mt-5'>
                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, distinctio! Nisi magnam dolore quod incidunt est quia, reprehenderit dolorum earum.
                    </p>
                </motion.div>


                            {/* innovative */}
                <motion.div className=' mmd:w-1/3 mt-10'
                initial="hidden" whileInView={"visible"} viewport={{once:true,amount:0.5}} transition={{delay:0.2 ,duration:0.5}} variants={{hidden:{opacity:0,y:50},visible:{opacity:1,y:0}}}
                >
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-playfair font-semibold text-5xl'>02</p>
                            <p className='font-playfair font-semibold text-3xl'>Innovative</p>
                        </div>
                        <div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]'/>
                    </div>
                    <p className='mt-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ratione maiores reiciendis, sunt atque explicabo?
                    </p>
                </motion.div>
                        {/* immaginative */}
                <motion.div className=' mmd:w-1/3 mt-10'
                initial="hidden" whileInView={"visible"} viewport={{once:true,amount:0.5}} transition={{delay:0.4 ,duration:0.5}} variants={{hidden:{opacity:0,y:50},visible:{opacity:1,y:0}}}
                >
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-playfair font-semibold text-5xl'>03</p>
                            <p className='font-playfair font-semibold text-3xl'>Immaginative</p>
                        </div>
                        <div className='w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]'/>
                    </div>
                    <p className='mt-5'>
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequatur cumque dolores aliquid tempore vel. Tempora.
                    </p>
                </motion.div>
            </div>
    </section>
  )
}
//{}[]
export default MySkills