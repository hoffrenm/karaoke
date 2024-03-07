import React, { useRef, useState } from 'react'
import NameInput from './NameInput';
import ImageUpload from './ImageUpload';
import SongSelection from './SongSelection';
import PitchSelection from './PitchSelection';
import ConsentCheckbox from './ConsentCheckbox';
import "./form.css"

const Form = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const formRef = useRef<HTMLFormElement>(null)

    // imitate submitting form and loading
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 2000)
    }

    return (
        <div>
            <p style={{ fontSize: "20px" }}>Ilmoittautumislomake</p>
            <form onSubmit={handleSubmit} ref={formRef}>
                <NameInput />
                <ImageUpload />
                <SongSelection />
                <PitchSelection />
                <ConsentCheckbox />

                {isLoading ? (
                    <button type="button">
                        <div className="loader" />
                    </button>
                ) : (
                    <button type="submit">
                        Ilmoittaudu
                    </button>
                )}
            </form >
        </div >
    );
}

export default Form;