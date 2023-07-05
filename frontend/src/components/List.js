import { useEffect, useState } from "react";

import Card from "./card";
import Preloader from './preloader';

const List = () => {

    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
          }, 2000);
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
            {loading ? (
                <Preloader />
                ) : (
                <div>
                    <h1>Lists of Books</h1>
                    <div className="list-div">
                    {/* List component fetch books detail from the database */}

                    <div className="listRow">
                        {lists && lists.map((item) => (
                            <Card key={item._id} list={item} error={item.error}/>
                        ))}
                    </div>
                    <div><p>{lists.error}</p></div>
                </div>
            </div>
                )}
        </div>
    )
}
export default List;