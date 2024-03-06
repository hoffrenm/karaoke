import "./nameinput.css"

const NameInput = () => {
    return (
        <div className="input-wrapper">
            <label htmlFor="name">Nimi tai nimimerkki*</label>
            <input className="name-input" type="text" id="name" name="name" />
        </div>
    )
}

export default NameInput
