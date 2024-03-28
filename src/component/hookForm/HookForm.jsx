
import useInputState from '../hooks/UseInputStreet';

const HookForm = () => {

    // const [name, handlNameChange] = useInputState('fazla rabbi')
    const emailState = useInputState('rabbi@gmail.com')
    console.log(emailState.value)
    const handleSubmit = e => {
        e.preventDefault();
    }


    return (
        <div>
            <form onSubmit={handleSubmit} >
                {/* <input value={name} onChange={handlNameChange}
                    type="text" name='name' /><br /> */}
                <input {...emailState} type="email" name='email' /><br />
                <input type="text" name='phone' /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;