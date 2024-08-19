import { useLocation, useNavigate } from "react-router-dom"
import "./Auth.css"
import SignupForm from "./SignupForm"
import { Button } from "@/components/ui/button"
import ForgotPasswordForm from "./ForgotPasswordForm"
import SigninForm from "./SigninForm"

const Auth = () => {
    const navigate=useNavigate()
    const location=useLocation();
  return (
    <div className='h-screen relative authContainer'>
        <div className='absolute top-0 right-0 bottom-0 bg-[#030712]
        bg-opacity-50'>
            <div className='bgBlure absolute top-1/2 right-1/2 transform
           -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center
            items-center h-[35rem] w-[50rem] rounded-md z-50 bg-black
            bg-opacity-60 shadow-2xl shadow-white px-10'>

                <h1 className="text-6xl font-bold pb-9">NextGen Trading</h1>
                
            {location.pathname=="/signup" ? (
             <section className="w-96">
                    <SignupForm />
                    <div className="flex items-center justify-center">
                        <span>have already account?</span>
                        <Button onClick={()=>navigate("/signin")} variant="ghost">
                            Signin
                        </Button>
                    </div>
                </section>
             )  : location.pathname=="/forgot-password" ? (
                <setion className="w-96">
                   <ForgotPasswordForm />
                   <div className="flex items-center justify-center mt-2">
                        <span>back to login</span>
                        <Button onClick={()=>navigate("/signin")} variant="ghost">
                            Signin
                        </Button>
                    </div>
                </setion>
              ) : ( 
                <section className="w-96">
                    <SigninForm />
                    <div className="flex items-center justify-center">
                        <span>{"don't have account?"}</span>
                        <Button onClick={()=>navigate("/signup")} variant="ghost">
                            Signup
                        </Button>
                    </div>

                    <div className="mt-10">
                        
                        <Button 
                        className="w-full py-5"
                        onClick={()=>navigate("/forgot-password")} variant="outline">
                            Forgot Password
                        </Button>
                    </div>
                </section>
             )}
            </div>
        </div>
    </div>
  )
}

export default Auth