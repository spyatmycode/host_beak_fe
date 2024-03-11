import React, { useContext, useState } from 'react'
import mainImg from "../assets/auth/image 2.png"
import { Navigate, useNavigate } from 'react-router-dom'
import { AppContext } from '../providers/AppProvider'

const Auth = () => {

    const navigate = useNavigate()

    const {auth, setAuth} = useContext(AppContext)

    

    if(auth) return <Navigate to={"/purchases/bills"} />


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

    // console.log(inputs);

    const handleSubmit =(e)=>{
        e.preventDefault();

        const {firstname, lastname, phonenumber, email, password, rememberme} = inputs

        if(!firstname || !lastname || !phonenumber || !email || !password){
            alert("Please fill all the fields before submitting");
            return

        }


        sessionStorage.setItem("host_beak_auth", true);

        setAuth(true)
        
        navigate("/purchases/bills")
   


    }
    return (
        <div className='flex select-none'>
            <div className='hidden lg:block w-1/2 fixed top-0 bottom-0'>
                <img className='absolute w-full h-full ' src={mainImg} alt="" />

                <div className='absolute z-10 top-[60%] w-full flex justify-center'>
                    <p className=' w-[445px] font-poppins text-white text-[36px]'>
                        Building exceptional services with Back Office Support and Business Perfomance

                    </p>
                </div>

            </div>
            <div className='w-full lg:w-1/2 h-screen fixed top-0 bottom-0 lg:left-1/2 overflow-y-scroll font-roobert pt-[45px] pl-[63px] pr-[63px] lg:pr-[99.53px] pb-[44.34px]'>

                <header className=' flex flex-col items-start gap-5 '>
                    <h4 className='text-[#272262] text-lg lg:text-[36px] font-[700]'>
                        Create Account
                    </h4>
                    <h5 className='text-[#282C4099] text-xl lg:text-[26px] font-[300]'>
                        Build an exceptional business
                    </h5>
                </header>

                <form onSubmit={handleSubmit} className='w-full lg:pt-10 pt-5 text-[#82869A] flex flex-col gap-6 text-[20px]'>

                    <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row w-full justify-between align-baseline'>
                        <span className='flex flex-col'>
                            <label htmlFor="" className='pb-3 lg:text-[20px] text-sm'>First Name</label>
                            <input type="text"
                                placeholder='Enter your first name'
                                className='text-[#373C56] placeholder:text-[#82869A80]
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
                                lg:text-[24px] text-base placeholder:text-[#82869A80]
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
                                lg:text-[24px] text-base placeholder:text-[#82869A80]
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
                                lg:text-[24px] text-base placeholder:text-[#82869A80]
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
                                lg:text-[24px] text-base placeholder:text-[#82869A80]
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
                            <div className='h-full w-full border-b block'>
                               
                               

                            </div>
                            <p className='whitespace-nowrap font-manrope lg:text-[21px] font-400'>
                                Got an Account?
                            </p>
                            <span>
                                <a href="#" className='text-[#3DB0FF] whitespace-nowrap font-manrope lg:text-[21px] font-400'>
                                    Sign In
                                </a>
                            </span>

                            <div className='h-full w-full border-b block'>
                               
                               

                               </div>
                        </span>
                    </div>



                </form>




            </div>
        </div>
    )
}

export default Auth
