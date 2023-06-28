import { useEffect, useState } from "react";
import Card from "./card";

const List = () => {

    const [lists, setLists] = useState([]);

    useEffect(() => {
        ListsFetch();
        console.log("Hellow");
    },[])
    const ListsFetch = async () => {
        try {
            const response = await fetch('/api/');
            const json = await response.json();
            setLists(json);
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>List of Books</h1>
            {/* List component fetch books list from the database */}

            <div className="listRow">
                {lists && lists.map((item) => (
                    <Card key={item._id} list={item} error={item.error}/>
                ))}
            </div>
            <div><p>{lists.error}</p></div>
        </div>
    )
}
export default List;