import React from 'react';
import { useTable, usePagination } from 'react-table';
import styled from 'styled-components';


export default function Table({ columns, data }) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 },
        },
        usePagination
    )

    return (
        <Style>
            <>
                <table className="my-3" {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th className="border-gray" {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <td className="border-gray" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="pagination-custom">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <button className="page-link" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                                    {'<<'}
                                </button>
                            </li>
                            <li className="page-item">
                                <button className="page-link" onClick={() => previousPage()} disabled={!canPreviousPage}>
                                    {'<'}
                                </button>
                            </li>
                            <li className="page-item">
                                <button className="page-link" onClick={() => nextPage()} disabled={!canNextPage}>
                                    {'>'}
                                </button>
                            </li>
                            <li className="page-item">
                                <button className="page-link" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                                    {'>>'}
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div className="px-5 d-flex align-items-center">
                        <span className="custom-width">
                            Pag.{' '}
                            <strong>
                                {pageIndex + 1} de {pageOptions.length}
                            </strong>{' '}
                        </span>
                        <span className="d-flex align-items-center custom-width">
                            | Ir a:
                            <input
                                className="ml-2 form-control"
                                type="number"
                                defaultValue={pageIndex + 1}
                                onChange={e => {
                                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                                    gotoPage(page)
                                }}
                                style={{ width: '50px' }}
                            />
                        </span>
                    </div>
                    <select
                        className="form-control w-auto"
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}
                    >
                        {[10, 20, 30, 40, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Ver {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
            </>
        </Style>
    );
}

const Style = styled.div`
    max-width: 100%;
    overflow: scroll;

    table {
        background-color: var(--white);
        width: 1250px;
        min-width: 750px;
        border-collapse: collapse;
    }
    .border-gray {
        border: 1px solid var(--border-gray);
    }
    table td { 
        padding: 15px 10px;
        background-color: var(--white);
    }
    td {
        opacity: 1;
        padding: 10px;
        line-height: 20px;
        transition: all 0.2s ease-in-out;
    } 
    .hide td {
        opacity: 0;
        line-height: 0px;
        padding: 0 10px;
    }
    th {
        padding: 15px 10px;
        min-width: 260px;
        text-transform: uppercase;
    }
    td {
        background-color: var(--white);
    }
    tr:nth-child(odd) td {
        background-color: var(--white);
    }
    tr .collapsed {
        opacity: 1;
        padding: 10px;
        line-height: 20px;
        transition: all 0.2s ease-in-out;
    }
    .pagination-custom {
        padding: 0.5rem;
        width: 100%;
        /* min-width: 750px; */
        display: flex;
        /* justify-content: center; */
        align-items: center;
    }
    .pagination {
        margin: 0px;
    }
    .custom-width {
        width: 100px;
    }
`;

