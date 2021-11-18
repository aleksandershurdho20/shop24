import React from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'
export default function Table({columns,data}) {
    return (
        <>
            <TableHead columns={columns}/>
            <TableBody data={data}/>
        </>
    )
}
