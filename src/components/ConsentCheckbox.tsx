import "./consentcheckbox.css"

const ConsentCheckbox = () => {
    return (
        <div className="input-wrapper" style={{ minHeight: "65px" }}>
            <label htmlFor="consent" className="checkbox-container">
                <p style={{ padding: "5px 0px 0px 10px" }}>
                    Sallin tietojeni tallennuksen karaokejärjestelmään
                </p>
                <input required type="checkbox" name="consent" id="consent" />
                <div role="checkbox" className="custom-checkbox" />
            </label>
        </div >
    )
}

export default ConsentCheckbox