import "./consentcheckbox.css"

const ConsentCheckbox = () => {
    return (

        <div className="input-wrapper">
            <label className="checkbox-container">
                <p style={{ padding: "5px 0px 0px 10px" }}>
                    Sallin tietojeni tallennuksen karaokejärjestelmään
                </p>
                <input type="checkbox" />
                <span className="custom-checkbox" />
            </label>
        </div >
    )
}

export default ConsentCheckbox