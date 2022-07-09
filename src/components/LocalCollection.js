import React, {useState, useEffect} from 'react';
import {
    collection,
    getDocs
} from "firebase/firestore";
import {db} from '../firebase-config';
import Pagination from "./Pagination";

const LocalCollection = () => {

    const localCollectionRef = collection(db, "LocalCollection");
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(3);
    const [localCollection, setlocalCollection] = useState([])

    useEffect(() => {
        const getFundation = async () => {
            const data = await getDocs(localCollectionRef);
            setlocalCollection(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getFundation();
    });

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = localCollection.slice(indexOfFirstPost, indexOfLastPost);

    const paginationFundation = (numberPage) => {
        setCurrentPage(numberPage);
        console.log("test");
    }

    return (
        <div>
            <ul>
                {currentPosts.map((el, index) => {
                    return <li key={index}>
                        <div className='fundation'>
                            <h3>{el.name}</h3>
                            <p>({el.target}</p>
                        </div>
                        <p>{el.stuff}</p>
                    </li>
                })}
            </ul>
            <Pagination postPerPage={postPerPage} totalPosts={localCollection.length}
                        paginationFundation={paginationFundation}/>
        </div>
    );
}

export default LocalCollection;