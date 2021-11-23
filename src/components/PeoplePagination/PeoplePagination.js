import React from 'react'
import { Link } from 'react-router-dom'
import '../PeoplePagination/PeoplePagination.css'

function PeoplePagination({ prevPage, nextPage, counterPage, getPeoples }) {
    const handleChangeNext = () => getPeoples(nextPage);
    const handleChangePrevious = () => getPeoples(prevPage);

    return (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <Link to={`/people/?page=${counterPage - 1}`} className="link">
                <button
                    onClick={handleChangePrevious}
                    disabled={!prevPage}
                >previous</button>
            </Link>
            <Link to={`/people/?page=${counterPage + 1}`} className="link">
                <button
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                >next</button>
            </Link>
        </div>
    )
}

export default PeoplePagination
