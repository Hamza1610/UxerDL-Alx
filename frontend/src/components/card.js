
const Card = (props) => {

    const listDetails = props.list

    const handleClick = async () => { 
      
        console.log("Function clicked");
        try {
            const response = await fetch('/api/download', {
            method: 'POST',
            body: JSON.stringify({ _id : listDetails._id }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
        
          if (!response.ok) {
            console.log('Error');
            return;
          }
        
          const json = await response.json();
          console.log(json);
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