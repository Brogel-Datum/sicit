import React from 'react';
import style from 'styled-components';
import { useTable, useExpanded } from 'react-table';

export default function NestedTable({ columns: userColumns, data }) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns: userColumns,
            data,
        },
        useExpanded // Use the useExpanded plugin hook
    )

    return (
        <Style>
            <div className="">
                <table className="my-3" {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column, index) => (
                                    <th className={`border-gray colum-${index}`} {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <td className="border-gray"  {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </Style >
    );
}

const Style = style.div`
max-width: 100%;
    overflow: scroll;
    table {
        background-color: var(--white);
        width: 1250px;
        min-width: 700px;
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
    .colum-0 {
        min-width: auto;
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
        .prueba {
            overflow-x: auto;
    }
    .table-responsive {
        max-width: 100%;
        overflow: scroll;
    }
`