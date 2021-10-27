import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function AgGrid(props: { events: [] }) {

    if (props) {
        return (
            <AgGridReact
                rowData={props.events}>
                <AgGridColumn sortable={true} filter={true} field="id"></AgGridColumn>
                <AgGridColumn sortable={true} filter={true} field="value"></AgGridColumn>
                <AgGridColumn sortable={true} filter={true} field="timestamp"></AgGridColumn>
            </AgGridReact>
        )
    } else return <>Loading...</>
}