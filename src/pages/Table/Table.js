import React, { useEffect, useState } from 'react';
import '../Table/Table.css';
import { API_PEOPLE, SWAPI_PARAM_PAGE } from '../../constans/api.js';
import TableData from '../../components/TableData/TableData.js';
import useQueryParam from '../../hooks/useQueryParam.js';
import { changeHTTP, getApiPeoples } from '../../utils/network';
import PeoplePagination from '../../components/PeoplePagination/PeoplePagination.js';

function Table() {
    const [peoples, setPeoples] = useState([]);
    const [errorApi, setErrorApi] = useState(false);

    const [loading, setLoading] = useState(false);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);

    const query = useQueryParam();
    const queryPage = query.get('page');

    const getPeoplePageId = url => {
        const positionPage = url.lastIndexOf(SWAPI_PARAM_PAGE);
        const numPage = url.slice(positionPage + SWAPI_PARAM_PAGE.length, url.length)
        return Number(numPage)
    }

    const getPeoples = async (url) => {
        setLoading(true)

        const res = await getApiPeoples(url)

        if (res && res.results) {
            const peopleData = res.results.map(({ name, birth_year, height, mass }) => {
                return {
                    name, birth_year, height, mass
                }
            })
            setLoading(false)
            setPeoples(peopleData)
            setErrorApi(false)
            setPrevPage(changeHTTP(res.previous))
            setNextPage(changeHTTP(res.next))
            setCounterPage(getPeoplePageId(url))

        } else {
            setErrorApi(true)
        }
    }

    useEffect(() => {
        getPeoples(API_PEOPLE + queryPage)
    }, [])

    return (
        <>
            {errorApi
                ? <h2>Error</h2>
                : (
                    <>
                        <TableData
                            peoples={peoples}
                            loading={loading}
                        />
                        <PeoplePagination
                            prevPage={prevPage}
                            nextPage={nextPage}
                            counterPage={counterPage}
                            getPeoples={getPeoples}
                        />
                    </>
                )

            }

        </>
    )

}

export default Table;
