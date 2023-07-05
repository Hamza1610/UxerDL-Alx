const Card = (props) => {

  const listDetails = props.list

  const handleClick = async () => { 
    
      console.log("Function clicked");
      try {
          const response = await fetch('/api/download', {
            method: 'POST',
            body: JSON.stringify({ _id: listDetails._id }),
            headers: {
              'Content-Type': 'application/json',
            },
            responseType: 'blob', // Set the response type to 'blob' to handle binary data
          });
      
          if (!response.ok) {
            console.log('Error');
            return;
          }
      
          const blob = await response.blob();
      
          // Create a temporary URL for the blob
          const url = URL.createObjectURL(blob);
      
          // Create an anchor element and trigger the download
          const a = document.createElement('a');
          a.href = url;
          a.download = listDetails.fileName; // Provide the desired file name
          a.click();
      
          // Clean up the temporary URL
          URL.revokeObjectURL(url);
        } catch (error) {
          console.error('Error:', error);
        }
    
  }

  return (
      <div className="card-div">
          <div className="dowload-div">
              <button className="download-button" onClick={handleClick}>Download</button>
          </div>
          <div className="card-content"> 
              <div className="book-destription-div">{listDetails.bookDescription}</div>
              <div className="book-detail-div">
                  <text><b>Name of book</b> : <small>{listDetails.bookName}</small></text><br />
                  <text><b>Category</b> : <small>{listDetails.bookCategory}</small></text><br />
                  <text><b>Author</b> : <small>{listDetails.UploaderName}</small></text><br />
              </div>
          </div>
      </div>
  )
}
export default Card;
