import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { timeComv } from '../utils/time-conv';

export default function AgGrid(props: { events: [] }) {

    const gridOptions: object = {
        columnDefs: [
            {
                field: 'timestamp',
            },
        ],
    }

    const dateFormatter = (data: { data: { timestamp: number } }) => timeComv(data.data.timestamp)

    if (props) {
        return (
            <AgGridReact
                gridOptions={gridOptions}
                className='ag-theme-alpine'
                rowData={props.events}
                rowSelection="multiple"
                pagination={true}
                suppressContextMenu={true}
                paginationPageSize={100}
                animateRows={true}
                rowDragManaged={true}
            >
                <AgGridColumn sortable={true} filter={true} field="id"></AgGridColumn>
                <AgGridColumn sortable={true} filter={true} field="value"></AgGridColumn>
                <AgGridColumn sortable={true} filter={true} field="timestamp" cellRenderer={dateFormatter} ></AgGridColumn>
            </AgGridReact>
        )
    } else return <>Loading...</>
}