import React from "react";

export default function Pagination ({pages, totalRecords, limit, skip, handlePaginationClick}) {

    const pageItems = [];

    const handlePrevClick = () => {
        if (skip - limit >= 0) {
            handlePaginationClick(skip - limit);
        }
    };

    const handleNextClick = () => {
        if (skip + limit < totalRecords) {
            handlePaginationClick(skip + limit);
        }
    };

    const handlePageNumberClick = (pageNumber) => {
        handlePaginationClick((pageNumber - 1) * limit);
    };

    for (let i = 1; i <= pages; i++) {
        // console.log(skip, i + ' - 1 * ' + limit + ' = ' + (i - 1) * limit);
        console.log('( ' + totalRecords + ' - ' + skip + ' + ' + limit + ' ) / ' + limit);
        let currentPageNumber = pages - Math.ceil((totalRecords - (skip + limit)) / limit);
        pageItems.push(
            <li key={i} className="page-item">
                <span id={'page-' + i} className={currentPageNumber === i ? 'page-link current-page' : 'page-link'} onClick={() => handlePageNumberClick(i)}>{i}</span>
            </li>
        );
        
    }

    return (
        <>
        <div className="pagination">
                <li className="page-item">
                    <span className="page-link" id="previous-page" onClick={() => handlePrevClick()}>Prev</span>
                </li>
                {pageItems}
                <li className="page-item">
                    <span className="page-link" id="next-page" onClick={() => handleNextClick()}>Next</span>
                </li>
            </div>
        </>
    );
}