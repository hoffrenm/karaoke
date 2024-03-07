import { ChangeEvent, useRef, useState } from "react"
import "./imageupload.css"

const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState<File>()
    const inputRef = useRef<HTMLInputElement>(null)

    const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = (event.target as HTMLInputElement).files;
        setSelectedImage(files?.[0])
    }

    return (
        <div className="input-wrapper">
            <span>Kasvokuva</span>
            <div>
                {selectedImage ?
                    <div className="image-container">
                        <img
                            alt="Profile picture of user"
                            src={URL.createObjectURL(selectedImage)} />
                        <button
                            className="remove-image-button"
                            onClick={() => setSelectedImage(undefined)}
                        >x</button>
                    </div>
                    :
                    <div>
                        <button
                            className="upload-image-button"
                            onClick={() => inputRef.current?.click()}>
                            + Tuo kasvokuva
                        </button>

                        <input
                            onChange={onFileChange}
                            id="profilepic"
                            type="file"
                            ref={inputRef}
                            style={{ display: 'none' }}
                        />
                    </div>}
            </div>
        </div>
    )
}

export default ImageUpload