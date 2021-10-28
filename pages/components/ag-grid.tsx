import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function AgGrid(props: { events: [] }) {

    // set background colour on every row, this is probably bad, should be using CSS classes
    const rowStyle = { background: 'aliceblue' };

    // set background colour on even rows again, this looks bad, should be using CSS classes
    const getRowStyle = (params: any) => {
        console.log(typeof params)
        if (params.node.rowIndex % 2 === 0) {
            return { background: 'white' };
        }
    };

    if (props) {
        return (
            <AgGridReact
                className='ag-theme-alpine'
                rowStyle={rowStyle}
                getRowStyle={getRowStyle}
                rowData={props.events}
                rowSelection="multiple"
                pagination={true}
                suppressContextMenu={true}
                paginationPageSize={100}
                // paginationAutoPageSize={true}
                animateRows={true}
                rowDragManaged={true}
            >
                <AgGridColumn sortable={true} filter={true} field="id"></AgGridColumn>
                <AgGridColumn sortable={true} filter={true} field="value"></AgGridColumn>
                <AgGridColumn sortable={true} filter={true} field="timestamp"></AgGridColumn>
            </AgGridReact>
        )
    } else return <>Loading...</>
}