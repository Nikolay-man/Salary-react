import React from 'react';
import { Table } from '@material-ui/core';

class TitleTable extends React.Component {
    render() {
        let styles = {
            display: 'flex',
            paddingTop: 10,
            paddingBottom: 10,
            margin: 2,
            backgroundColor: '#B2BEC3',
        }

        const stylesFlex = {
            flex: 1,
            textAlign: 'center',
            paddingTop: 5,
            paddingBottom: 5,
            margin: 5,
            fontWeight:'bold',

        }

        const stylesFlexSum = {
            textAlign: 'center',
            paddingTop: 5,
            paddingBottom: 5,
            margin: 'auto 5px',
            fontWeight:'bold',
        }

        const arr = [
            'Name',
            'Surname',
            'Position',
            'Days worked',
            'Rate $',
            'Salary $',
        ];

        const titles = arr.map(function (item, index) {
            return <div key={index} style={stylesFlex}>{item}</div>;

        });

        return <Table style={styles}>
            {titles}
            <div style={stylesFlexSum}>
            {this.props.TitleTable}
            </div>
        </Table>
    }
}

export default TitleTable;