
const Card = (props) => {

    const listDetails = props.list

    return (
        <div className="card-div">
            <div className="card-content"> 
                <div className="book-destription-div">{listDetails.bookDescription}</div>
                <div className="book-detail-div">
                    <p><b>Name of book</b> : <small>{listDetails.bookName}</small></p>
                    <p><b>Category</b> : <small>{listDetails.bookCategory}</small></p>
                    <p><b>Author</b> : <small>{listDetails.UploaderName}</small></p>
                </div>
            </div>
        </div>
    )
}
export default Card;