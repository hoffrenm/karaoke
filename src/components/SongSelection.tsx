import { useState } from "react"
import "./songselection.css"

const SongSelection = () => {
    const [songList, setSongList] = useState<string[]>([])
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [newSong, setNewSong] = useState<string>("")

    const addSong = () => {
        if (newSong) {
            setSongList([newSong, ...songList])
        }

        setNewSong("")
        setIsOpen(false)
    }

    const handleNewSongChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewSong(event.target.value)
    }

    // This is done because Edge and Chrome dont like click events on option
    const handleSomething = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value == "open") {
            setIsOpen(true)
        }
    }

    return (
        <div className="input-wrapper">
            <label>Biisi*</label>
            {isOpen ? (
                <div className="add-song-wrapper">
                    <input
                        className="song-input"
                        onChange={handleNewSongChange}
                        autoFocus placeholder="Lisää biisi"
                        type="text"
                        id="song"
                        name="song" />
                    <button
                        className="button-confirm"
                        onClick={addSong}>
                        +
                    </button>
                    <button
                        className="button-cancel"
                        onClick={() => setIsOpen(false)}>
                        X
                    </button>
                </div>
            ) : (
                <select
                    required
                    onChange={(event) => handleSomething(event)}
                    name="song"
                    id="song">
                    <option value="" disabled selected hidden>Valitse alta</option>
                    {songList.map(song =>
                        <option key={song} value={song}>{song}</option>
                    )}
                    <option value="open">+ Lisää biisi</option>
                </select>
            )}
        </div>
    )

}

export default SongSelection