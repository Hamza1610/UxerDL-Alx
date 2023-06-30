import { useState } from "react";
const Upload = () => {
    
    const [fileName, setFileName] = useState('')
    const [bookName, setBookName] = useState('')
    const [bookCategory, setBookCategory] = useState('')
    const [bookDescription, setBookDescription] = useState('')
    const [UploaderName, setUploaderName] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        /* A function that send both book and info to the books
        folder and the database*/
        e.preventDefault();
        console.log("Handle Submit function clicked");

        const Data = { fileName: fileName,
                        bookName: bookName,
                        bookCategory:bookCategory,
                        bookDescription: bookDescription,
                        UploaderName: UploaderName
                    }

        const response = await fetch('/api/upload',{
            method : 'POST',
            body : JSON.stringify(Data),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json();
        
        if (!response.ok) {
            setError(json.error)
        }
        if (response) {
            setFileName('')
            setBookName('')
            setBookCategory('')
            setBookDescription('')
            setUploaderName('')
            setError(null)
        }

    }
    return (
        <div className="form-div">
            <form className="uploadForm" onSubmit={handleSubmit}>
                <label htmlFor="fileName">Enter file</label>
                <input
                    type="file"
                    name = "fileName"
                    className = "fileName"
                    placeholder = "Please select from your drive"
                    onChange={(e) => setFileName(e.target.value)}
                    value={fileName}
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
                required>
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