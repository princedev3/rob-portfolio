import React from 'react'
import LineGradient from '../component/LineGradient'
import {useForm} from "react-hook-form"
import {motion} from "framer-motion"

const Contact = () => {
    const {register,trigger,formState:{errors}} = useForm() 
    const onSubmit = async (e)=>{
        const isValid = await trigger()
        if(!isValid){

            e.preventDefault()
        }

    }
  return (
    <section id='contact' className='py-48'>
            <motion.div className='flex justify-center w-full'
                initial="hidden" whileInView={"visible"} viewport={{once:true,amount:0.5}} transition={{delay:0.2 ,duration:0.5}} variants={{hidden:{opacity:0,x: 50},visible:{opacity:1,x:0}}}
                >
                    <div>
                    <p className=' font-playfair  font-semibold text-4xl '>
                       <span className='text-yellow'>CONTACT ME</span>  TO GET STARTED
                    </p>
                       <div className='flex md:justify-end my-5'>
                        <LineGradient width='mx-auto w-2/4'/>

                       </div>
                    </div>
                </motion.div>

                <div className='md:flex md:justify-between gap-16 mt-5 '>
                    <motion.div className='basis-1/2 flex justify-center'
                    initial="hidden" whileInView={"visible"} viewport={{once:true,amount:0.5}} transition={{delay:0.2 ,duration:0.5}} variants={{hidden:{opacity:0,y: 50},visible:{opacity:1,y:0}}}>
                             <img src="../assets/contact-image.jpeg" alt="" srcset="" /> 
                        </motion.div>
                            <motion.div  className='basis-1/2 mt-10 md:mt.0'
                             initial="hidden" whileInView={"visible"} viewport={{once:true,amount:0.5}} transition={{delay:0.2 ,duration:0.5}} variants={{hidden:{opacity:0,y: 50},visible:{opacity:1,y:0}}}>
                                    <form action="https://formsubmit.co/marvinprince232@gmail.com" className=' w-full pl-2' target='_blank' onSubmit={onSubmit} method='POST'>
                                        <input type="text " className='w-full bg-blue font-semibold placeholder-opaque-black p-3' placeholder='NAME' {...register("name",{required:true,maxLength:100,})}/>
                                        {
                                            errors.name && (
                                            <p className='text-red mt-1'>
                                                {errors.name.type ==="required" &&"this field is required"}
                                                {errors.name.type =="maxlength" && "max length is 100 char"}
                                            </p>
                                            )
                                        }

                                        <input type="text" className='w-full bg-blue font-semibold placeholder-opaque-black p-3c mt-5' placeholder='EMAIL' {...register("email",{required:true,pattern:/^[A-Z0-9._%+-]+"@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}/>

                                        {
                                            errors.email && (
                                            <p className='text-red mt-1'>
                                                {errors.email.type ==="required" &&"this field is required"}
                                                {errors.email.type =="pattern" && "invalid email address"}
                                            </p>
                                            )
                                        }
                                        <textarea type="text" rows="4" cols="50" className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5' placeholder='MESSAGE' {...register("message",{required:true,maxLength:2000})}/>

                                        {
                                            errors.email && (
                                            <p className='text-red mt-1'>
                                                {errors.message.type ==="required" &&"this field is required"}
                                                {errors.message.type =="maxLength" && "max length is 2000 char."}
                                            </p>
                                            )
                                        }
                                        <button type='submit' className='p-5 bg-yellow text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500'>SEND ME A MESSAGE</button>
                                    </form>
                            </motion.div>
                    
                </div>
    </section>
  )
}
//{}[]
export default Contact