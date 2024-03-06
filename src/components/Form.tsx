import React, { useState } from 'react'
import NameInput from './NameInput';
import "./form.css"

interface SignupFormState {
    name: string;
}

const Form = () => {
    const [formData, setFormData] = useState<SignupFormState>({
        name: '',
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("yippee")
    }

    return (
        <div>
            <p style={{ fontSize: "20px" }}>Ilmoittautumislomake</p>
            <form onSubmit={handleSubmit}>

                <NameInput />

                <button type="submit">Ilmoittaudu</button>
            </form>
        </div>
    );
}

export default Form;  