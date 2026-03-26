const Pagination = ({currentPage, totalPages, onPageChange }) => {

    

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <button className={`page-link ${currentPage == 1 ? 'disabled' : ''}`} href="#" aria-label="Previous" onClick={() => onPageChange(currentPage - 1)}>
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only"></span>
                    </button>
                </li>
                {currentPage == 1 && (
                    <>
                        <li className="page-item"><button className="page-link active" href="#">1</button></li>
                        <li className="page-item"><button className="page-link" href="#">2</button></li>
                        <li className="page-item"><button className="page-link" href="#">3</button></li>
                    </>)
                }

                { currentPage > 1 && currentPage < totalPages && (
                    <>
                        <li className="page-item"><button className={`page-link ${currentPage == 1 ? "active" : "" }`} href="#">{currentPage - 1}</button></li>
                        <li className="page-item"><button className="page-link active" href="#">{currentPage}</button></li>
                        <li className="page-item"><button className="page-link" href="#">{currentPage + 1}</button></li> 
                    </>)
                }

                {currentPage == totalPages && (
                    <>
                        <li className="page-item"><button className="page-link" href="#">{totalPages - 2}</button></li>
                        <li className="page-item"><button className="page-link" href="#">{totalPages - 1}</button></li>
                        <li className="page-item"><button className="page-link active" href="#">{totalPages}</button></li>
                    </>)
                }

                <li className="page-item">
                    <button className={`page-link ${currentPage == totalPages ? 'disabled' : ''}`} href="#" aria-label="Next" onClick={() => onPageChange(currentPage + 1) }>
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only"></span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;