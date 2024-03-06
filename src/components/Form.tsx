import React, { useState } from 'react'
import NameInput from './NameInput';
import ImageUpload from './ImageUpload';
import SongSelection from './SongSelection';
import "./form.css"

interface SignupFormState {
    name: string;
    image?: File;
    song: string;
}

const Form = () => {
    const [formData, setFormData] = useState<SignupFormState>({
        name: '',
        song: '',
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
                <ImageUpload />
                <SongSelection />

                <button type="submit">Ilmoittaudu</button>
            </form>
        </div>
    );
}

export default Form;  