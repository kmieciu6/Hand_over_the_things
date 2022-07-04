import React, { useState, useEffect } from 'react';
import {
    collection,
    getDocs
} from "firebase/firestore";
import { db } from '../firebase-config';
import Pagination from "./Pagination";

const NGOrganisation = () => {
    const [nogovermentOrganisation, setnogovermentOrganisation] = useState([])
    const nogovermentOrganisationsCollectionRef = collection(db, "NGOrganisation");
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(3);
    useEffect(() => {
        const getFundation = async () => {
            const data = await getDocs(nogovermentOrganisationsCollectionRef);
            setnogovermentOrganisation(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getFundation();
    });

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = nogovermentOrganisation.slice(indexOfFirstPost, indexOfLastPost);

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
            <Pagination postPerPage={postPerPage} totalPosts={nogovermentOrganisation.length} paginationFundation={paginationFundation} />
        </div>
    );
}

export default NGOrganisation;