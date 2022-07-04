import React from 'react';

const Pagination = ({ postPerPage, totalPosts, paginationFundation }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className='paginaton'>
            {pageNumbers.length > 1 && pageNumbers.map((el) => {
                return <button key={el} onClick={() => paginationFundation(el)} className="pageItem">
                    {el}
                </button>
            })}
        </nav>
    );
}

export default Pagination;