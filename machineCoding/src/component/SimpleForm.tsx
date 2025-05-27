import { useState } from 'react';

function SimpleForm(){
    const [ fullName, setFullName] = useState("");
      const [ email, setEmail] = useState("");
    
      function handleFullNameChange(event: React.ChangeEvent<HTMLInputElement>){
        setFullName(event.target.value);
      }
    
      function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value);
      }
    
      function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        try{
          event.preventDefault();
          console.log("Full Name is:", fullName);
          console.log("Email is:", email);
          setEmail("");
          setFullName("");
        }catch(error){
          console.log("Error during form submission", error);
        }
      }

    return(
        <>
            <div className='flex justify-center items-center m-10 h-100'> 
                <form 
                className='flex flex-col gap-5 border-1 border-gray-500 p-5 rounded-2xl shadow-2xl shadow-gray-500'
                onSubmit={ handleSubmit }
                >
                    <input 
                    type="text"
                    placeholder='Full Name'  
                    className='p-2 border-1 border-black rounded-xl'
                    onChange={handleFullNameChange}
                    value={fullName}
                    autoComplete='on'/>

                    <input 
                    type="email"
                    placeholder='Email'  
                    className='p-2 border-1 border-black rounded-xl'
                    onChange={handleEmailChange}
                    value={email}
                    autoComplete='on'
                    />

                    <button 
                    className='p-2 bg-blue-500 rounded-2xl'
                    type="submit"
                    >
                    Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default SimpleForm