import React, { useState, useEffect } from 'react';
import {
    collection,
    getDocs
} from "firebase/firestore";
import { db } from '../firebase-config';
import Pagination from "./Pagination";

const Fundation = () => {
    const [fundation, setFundation] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(3);
    const fundationsCollectionRef = collection(db, "organisation-list");


    useEffect(() => {
        const getFundation = async () => {
            const data = await getDocs(fundationsCollectionRef);
            setFundation(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getFundation();
    });

    console.log(fundation);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = fundation.slice(indexOfFirstPost, indexOfLastPost);

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
            <Pagination postPerPage={postPerPage} totalPosts={fundation.length} paginationFundation={paginationFundation} />
        </div>
    );
}

export default Fundation;