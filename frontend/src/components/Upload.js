import { useState } from "react";
const Upload = () => {
    const [file, setFile] = useState(null)
    const [bookName, setBookName] = useState('')
    const [bookCategory, setBookCategory] = useState('')
    const [bookDescription, setBookDescription] = useState('')
    const [UploaderName, setUploaderName] = useState('')
    const [error, setError] = useState(null)

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        /* A function that send both book and info to the books
        folder and the database*/
        e.preventDefault();
        console.log("Handle Submit function clicked");


        const Data = new FormData();
        Data.append("file", file);
        Data.append("bookName", bookName);
        Data.append("bookCategory", bookCategory);
        Data.append("bookDescription", bookDescription);
        Data.append("UploaderName", UploaderName);

        const response = await fetch('/api/upload',{
            method : 'POST',
            body : Data,
        })
        const json = await response.json();
        
        if (!response.ok) {
            setError(json.error)
        }
        if (response && response.ok) {
            setBookName('')
            setBookCategory('')
            setBookDescription('')
            setUploaderName('')
            setError(null)

            console.log("File successfully upload");
        }

    }
    return (
        <div className="form-div">
            <form className="uploadForm" onSubmit={handleSubmit}>
                <label htmlFor="fileName">Enter file</label>
                <input
                    type="file"
                    name = "file"
                    id="file"
                    onChange={handleFileChange}
                    placeholder = "Please select from your drive"
                    required
                />

                <input
                    type="text"
                    name = "bookName"
                    className = "bookName"
                    placeholder = "Enter name of book"
                    onChange={(e) => setBookName(e.target.value)}
                    value={bookName}
                    required
                />
                <label htmlFor ="bookCategory">Book category</label>
                <select 
                name = "bookCategory"
                className = "bookCategory"
                onChange={(e) => setBookCategory(e.target.value)}
                value={bookCategory}
                >
                    <option value=""></option>
                    <option value="Science">Science</option>
                    <option value="Art">Art</option>
                    <option value="Novel/Novella">Novel/Novella</option>
                </select>

                <textarea
                    placeholder="Book description"
                    name="bookDescription"
                    className="bookDescription"
                    onChange={(e) => setBookDescription(e.target.value)}
                    value={bookDescription}
                    required
                ></textarea>
                <input
                    type="text"
                    name = "UploaderName"
                    className = "UploaderName"
                    placeholder = "Uploader's name"
                    onChange={(e) => setUploaderName(e.target.value)}
                    value={UploaderName}
                    required
                />
                {error && <div className="errorName">{error}</div>}
                <input
                    type="submit"
                    name = "submitButton"
                    className = "submitButton"
                    value = "Upload"
                />

            </form>
        </div>
    )
}
export default Upload;