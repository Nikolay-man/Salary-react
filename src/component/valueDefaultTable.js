import React from 'react';
import { Button, TextField } from '@material-ui/core';

class ValueDefaultTable extends React.Component {

    render() {
        
        let styles = {
            display: 'flex',
            paddingTop: 10,
            paddingBottom: 10,
            margin: 2,
            backgroundColor: '#F9F5ED',
        }

        const stylesFlex = {
            flex: 1,
            textAlign: 'center',
            paddingTop: 5,
            paddingBottom: 5,
            margin: 'auto 5px',
        }

        if (this.props.position === 'manager') {
            styles = {
                display: 'flex',
                paddingTop: 10,
                paddingBottom: 10,
                margin: 2,
                backgroundColor: '#F5CD79'
            }
        }
        return (<div style={styles}>
            <div style={stylesFlex}>{this.props.name}</div>
            <div style={stylesFlex}>{this.props.surname}</div>
            <div style={stylesFlex}>{this.props.position}</div>
            <TextField style={stylesFlex} variant="outlined" defaultValue={this.props.days} />
            <TextField style={stylesFlex} variant="outlined" defaultValue={this.props.rate} />
            <div style={stylesFlex}>{this.props.days * this.props.rate}</div>
            <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={this.props.deleteItem}>X</Button>
        </div>
        )
    }

}

export default ValueDefaultTable;