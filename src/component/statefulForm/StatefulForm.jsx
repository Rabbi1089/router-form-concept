import { useState } from "react";

const StatefulForm = () => {

    const [name, setName] = useState('Fazla rabbi')
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error , setError] = useState('')


    const handleSubmit = e => {
        e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(password)
        if(password.length < 5 ){
            setError('password minimum 5 character')
        }

    }

    const handleEmailChange = e => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                    onChange={handleNameChange}
                    type="text" name='name' value={name} /><br />
                <input
                    onChange={handleEmailChange}
                    type="email" name='email' /><br />
                <input
                    onChange={handlePasswordChange}
                    type="password" name='password' required /><br />
                <input

                    type="submit" value="submit" />
                    {
                        error && <p> {error}</p>
                    }
            </form>
        </div>


    );
};

export default StatefulForm;