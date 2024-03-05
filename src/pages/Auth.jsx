import React, { useState } from 'react'
import mainImg from "../assets/auth/image 2.png"
import { useNavigate } from 'react-router-dom'

const Auth = () => {

    const navigate = useNavigate()


    const [inputs, setInputs] = useState({
        firstname:"",
        lastname:"",
        phonenumber:"",
        email:"",
        password:"",
        rememberme:false,

    })

    const handleInputs =(e)=>{

        const {name, value} = e.target
        setInputs({...inputs, [name]:value})
    }

    console.log(inputs);

    const handleSubmit =(e)=>{
        e.preventDefault();

        const {firstname, lastname, phonenumber, email, password, rememberme} = inputs

        if(!firstname || !lastname || !phonenumber || !email || !password){
            alert("Please fill all the fields before submitting");
            return

        }
        
        navigate("/purchases/bills")
   


    }
    return (
        <div className='flex select-none'>
            <div className='hidden lg:block w-1/2 h-screen relative'>
                <img className='absolute w-full h-full ' src={mainImg} alt="" />

                <div className='absolute z-10 top-[60%] w-full flex justify-center'>
                    <p className=' w-[445px] font-poppins text-white text-[36px]'>
                        Building exceptional services with Back Office Support and Business Perfomance

                    </p>
                </div>

            </div>
            <div className='w-full lg:w-1/2 h-screen font-roobert'>

                <header className='pl-12 lg:pt-10 pt-5 flex flex-col items-start gap-5 '>
                    <h4 className='text-[#272262] text-lg lg:text-[36px] font-[700]'>
                        Create Account
                    </h4>
                    <h5 className='text-[#282C4099] text-xl lg:text-[26px] font-[300]'>
                        Build an exceptional business
                    </h5>
                </header>

                <form onSubmit={handleSubmit} className='pl-12 pr-12 lg:pr-0 lg:w-4/5 w-full lg:pt-10 pt-5 text-[#82869A] flex flex-col gap-6 text-[20px]'>

                    <div className='flex flex-col lg:flex-row w-full gap-10 align-baseline'>
                        <span className='flex flex-col'>
                            <label htmlFor="" className='pb-3 lg:text-[20px] text-sm'>First Name</label>
                            <input type="text"
                                placeholder='Enter your first name'
                                className='text-[#373C56]
                                border-b-[#EBEBEB] border-b-[3px]
                                pb-3 focus:border-b-[#272262] outline-none
                                transition duration-300 ease-in-out 
                                lg:text-[24px] text-base
                                '
                                name='firstname'
                                onChange={handleInputs}
                            />

                        </span>
                        <span className='flex flex-col'>
                            <label htmlFor="" className='pb-3 lg:text-[20px] text-sm'>Last Name</label>
                            <input required type="text"
                                placeholder='Enter your last name'
                                className='text-[#373C56]
                                border-b-[#EBEBEB] border-b-[3px]
                                pb-3 focus:border-b-[#272262] outline-none transition duration-300 ease-in-out 
                                lg:text-[24px] text-base
                            '
                                name='lastname'
                                onChange={handleInputs}
                            />

                        </span>


                    </div>

                    <div className='w-full'>
                        <span className='flex flex-col'>
                            <label htmlFor="" className='pb-3 lg:text-[20px] text-sm'>Phone Number</label>
                            <input required type="text"
                                placeholder='Enter your phone number'
                                className='text-[#373C56]
                                border-b-[#EBEBEB] border-b-[3px]
                                pb-3 focus:border-b-[#272262] outline-none transition duration-300 ease-in-out 
                                lg:text-[24px] text-base
                            '
                                name='phonenumber'
                                onChange={handleInputs}
                            />

                        </span>

                    </div>
                    <div className='w-full'>
                        <span className='flex flex-col'>
                            <label htmlFor="" className='pb-3 lg:text-[20px] text-sm'>Email</label>
                            <input required type="text"
                                placeholder='Enter your email'
                                className='text-[#373C56]
                                border-b-[#EBEBEB] border-b-[3px]
                                pb-3 focus:border-b-[#272262] outline-none transition duration-300 ease-in-out 
                                lg:text-[24px] text-base
                            '
                                name='email'
                                onChange={handleInputs}
                            />

                        </span>

                    </div>
                    <div className='w-full'>
                        <span className='flex flex-col'>
                            <label htmlFor="" className='pb-3 lg:text-[20px] text-sm'>Password</label>
                            <input required type="text"
                                placeholder='Enter your password'
                                className='text-[#373C56]
                                border-b-[#EBEBEB] border-b-[3px]
                                pb-3 focus:border-b-[#272262] outline-none transition duration-300 ease-in-out 
                                lg:text-[24px] text-base
                                '
                                name='password'
                                onChange={handleInputs}
                            />

                        </span>

                    </div>

                    <div className='w-full flex justify-between lg:py-5'>

                        <span className='flex items-center gap-2 '>
                            <input  type="checkbox" className='bg-[#D8D8D8] rounded-full border-none w-[20px] h-[20px] cursor-pointer outline-none'
                                name='rememberme' onChange={handleInputs}
                            />
                            <p className='text-[#82869A99] lg:text-[22px] text-sm'>Remember me</p>
                        </span>
                        <p className='text-[#3DB0FF] lg:text-[22px] text-sm'>
                            Forgot Password?
                        </p>

                    </div>

                    <div className='w-full'>
                        <button className='w-full text-white bg-[#3DB0FF]

                        border-none py-2 lg:py-5 rounded-md lg:text-[30px] text-lg
                        
                        '>
                            Sign Up

                        </button>

                        <span className='flex text-sm lg:text-[21px] py-2 lg:py-5 items-center gap-2 text-center w-full justify-center'>
                            <p className=''>
                                Got an Account?
                            </p>
                            <span>
                                <a href="#" className='text-[#3DB0FF]'>
                                    Sign In
                                </a>
                            </span>
                        </span>
                    </div>



                </form>




            </div>
        </div>
    )
}

export default Auth
