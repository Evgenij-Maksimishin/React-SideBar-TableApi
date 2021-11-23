import React from 'react';
import '../TableData/TableData.css';

function TableData({ peoples, loading }) {

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <table className="table">
                <thead >
                    <tr>
                        <th>Name</th>
                        <th>Birth Year</th>
                        <th>Height</th>
                        <th>Mass</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        peoples.map((people, index) =>
                            <tr key={index}>
                                <td>{people.name}</td>
                                <td>{people.birth_year}</td>
                                <td>{people.height}</td>
                                <td>{people.mass}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableData;

