import "./pitchselection.css"

const PitchSelection = () => {
    return (
        <div className="input-wrapper">
            <p>Sävellaji*</p>
            <div className="radiogroup-container">
                <label className="radiobutton-container">
                    <input
                        required
                        defaultChecked
                        type="radio"
                        name="pitch"
                        value={-2}
                    />
                    <div
                        className="custom-radiobutton"
                        style={{ borderRadius: "8px 0px 0px 8px" }}
                    >-2</div>
                </label>
                <label className="radiobutton-container">
                    <input
                        type="radio"
                        name="pitch"
                        value={-1}
                    />
                    <div className="custom-radiobutton">-1</div>
                </label>
                <label className="radiobutton-container">
                    <input
                        type="radio"
                        name="pitch"
                        value={0}
                    />
                    <div className="custom-radiobutton">0</div>
                </label>
                <label className="radiobutton-container">
                    <input
                        type="radio"
                        name="pitch"
                        value={1}
                    />
                    <div className="custom-radiobutton">+1</div>
                </label>
                <label className="radiobutton-container">
                    <input
                        type="radio"
                        name="pitch"
                        value={2}
                    />
                    <div
                        className="custom-radiobutton"
                        style={{ borderRadius: "0px 8px 8px 0px" }}
                    >+2</div>
                </label>
            </div>
        </div>
    )
}

export default PitchSelection