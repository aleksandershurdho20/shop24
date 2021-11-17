import React from 'react'
import TableHead from './TableHead'
export default function Table({columns,data}) {
    return (
        <>
            <TableHead columns={columns}/>
        </>
    )
}
