import { Link } from "react-router-dom";

function Login(){
    return(
        <section id="login">
            <form className="flex flex-col items-center gap-3 md:w-96 w-74 p-10 shadow-lg rounded-2xl">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">LogIn</h1>

                <div className="flex flex-col gap-5 text-gray-700 text-sm">
                    <div className="flex flex-col gap-1 items-start">
                        <label htmlFor="" className="">UserId:</label>
                        <input
                            id="userid"
                            type="text"
                            autoComplete="username"
                            placeholder="123456"
                            className="shadow-lg p-2 rounded-lg bg-white text-black min-w-64"
                        />
                    </div>
                    
                    <div className="flex flex-col gap-1 items-start">
                        <label htmlFor="">Password:</label>
                        <input
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            placeholder="Password"
                            className="shadow-lg p-2 rounded-lg bg-white text-black min-w-64"
                        />
                    </div>
                </div>

                <Link 
                    to='/forgot-password'
                    className="text-blue-600 hover:underline text-sm"
                >
                    Forgot Password ?
                </Link>

                <button 
                    type="submit"
                    className="md:text-lg shadow-lg p-2 min-w-64 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-500 hover:cursor-pointer"
                >
                    LogIn
                </button>
            </form>
        </section>
    )
}

export default Login;