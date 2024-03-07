import { ReactElement, ReactNode, useState } from "react"
import "./songselection.css"

const SongSelection = () => {
    const [songList, setSongList] = useState<string[]>(["Antti Tuisku", "David Bowie", "Kari Tapio"])
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
    const handleOptionClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value === "add") {
            setIsOpen(true)
        }
    }

    return (
        <div className="input-wrapper">
            <label htmlFor="song">Biisi*</label>
            {isOpen ? (
                <div className="add-song-wrapper">
                    <input
                        required
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
                        onClick={() => setIsOpen(false)}
                    >x</button>
                </div>
            ) : (
                <select
                    required
                    onChange={handleOptionClick}
                    name="song"
                    id="song"
                >
                    <option value="" disabled hidden selected>Valitse alta</option>
                    {songList.map((song) => <option key={song} value={song}>{song}</option>)}
                    <option value="add">+ Lisää oma biisi</option>
                </select>
            )}
        </div >
    )
}

export default SongSelection