import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function EmployerLogin() {
  const navigate = useNavigate();

  //using useState to set the credentials
  const [credentials, setCredentials] = useState({ empid: "", password: "" })

  //on submiting the form, this function will login the user
  const proceedLogin = async (e)=>{
    e.preventDefault() //prevent the default actions

    //fetch the user
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/manager-login`, {
      method: "POST", //mention the method of request
      headers:{
        "Content-Type": "application/json"
      },
      //mentions the datas to pass in body of request
      body: JSON.stringify({
        empid: credentials.empid,
        password: credentials.password
      })
    })
    const json = await response.json();
    console.log(json)

    //alert the error to the user
    if(json.errors){
      alert(json.errors[0].msg)
    }else if(json.error){
      alert(json.error)
    }
    //check if the auth token is generated
    if(json.success){
      localStorage.setItem("token", json.authToken); //store the auth token in user's localstorage

      //once auth token is stored, redirect the user to the actual site
      navigate('/home')
    }
    else{
      navigate("/employer-login")
      setCredentials({ empid: "", password: "" })
    }
  }
    

    const onChange = (event)=>{
      setCredentials({...credentials, [event.target.name]: event.target.value})
    }
  

  return (
    <>
      <section className="bg-login-image bg-cover bg-center bg-no-repeat filter brightness-85 w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-800"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            PROJECT+
          </a>
          <div className="w-full bg-gray-800 border-gray-700 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
               Employer Login
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={proceedLogin}>
                <div>
                  <label
                    htmlFor="empid"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Employer ID:
                  </label>
                  <input
                    type="empid"
                    name="empid"
                    id="empid"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Eg: 000AB100"
                    required=""
                    value={credentials.empid}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={credentials.password}
                    onChange={onChange}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="/forgot-password"
                    className="text-sm font-medium text-primary-600 hover:underline text-[#FFB000]"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#FFB100] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                   Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
