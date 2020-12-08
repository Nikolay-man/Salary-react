import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class AddTable extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            surname: '',
            position: '',
            days: 0,
            rate: 0,
            salary: '',
            checked: true
        }
    }

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
            margin: 5,
        }

        return (
            <div style={styles}>
                <TextField
                    name='name'
                    placeholder='name'
                    defaultValue=''
                    style={stylesFlex}
                    variant="outlined"
                    size="Normal"
                    onChange={(event, name) => this.setState({ name: 'event.target.value' })}
                />
                <TextField
                    name='surname'
                    placeholder='surname'
                    defaultValue=''
                    style={stylesFlex}
                    variant="outlined"
                    size="Normal"
                    onChange={(event, surname) => this.setState({ surname: event.target.value })}
                />
                <div style={stylesFlex}>
                    <Select
                        name='position'
                        defaultValue='manager'
                        variant="outlined"
                        size="Normal"
                        onChange={(event, position) => this.setState({ position: event.target.value })}
                    >
                        <MenuItem value='manager'>manager</MenuItem>
                        <MenuItem value='worker'>worker</MenuItem>
                    </Select>
                </div>
                <TextField
                    name='days'
                    placeholder='0'
                    style={stylesFlex}
                    variant="outlined"
                    size="Normal"
                    onChange={(event, days) => this.setState({ days: event.target.value })}
                />
                <TextField
                    name='rate'
                    placeholder='0'
                    style={stylesFlex}
                    variant="outlined"
                    size="Normal"
                    onChange={(event, rate) => this.setState({ rate: event.target.value })}
                />
                <div
                    name='salary'
                    style={stylesFlex}
                    value={this.state.salary}
                />
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => this.props.newWorker(this.state)}>Add</Button>
            </div>
        )
    }
}

export default AddTable;