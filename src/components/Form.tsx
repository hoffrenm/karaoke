import React, { useState } from 'react'
import NameInput from './NameInput';
import ImageUpload from './ImageUpload';
import SongSelection from './SongSelection';
import PitchSelection from './PitchSelection';
import ConsentCheckbox from './ConsentCheckbox';
import "./form.css"

interface SignupFormState {
    name: string;
    image?: File;
    song: string;
    pitch: -2 | -1 | 0 | 1 | 2,
    consent: boolean
}

const Form = () => {
    const [formData, setFormData] = useState<SignupFormState>({
        name: '',
        song: '',
        pitch: -2,
        consent: false
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
                <PitchSelection />
                <ConsentCheckbox />

                <button type="submit">Ilmoittaudu</button>
            </form>
        </div>
    );
}

export default Form;  