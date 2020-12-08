import React from 'react';
import ValueDefaultTable from './valueDefaultTable';
import TitleTable from './titleTable';
import AddTable from './addTable';

class DefaultTable extends React.Component {

    constructor() {
        super();
        this.state = {
            workers: [
                { name: 'Alex', surname: 'Sakharov', position: 'manager', days: 30, rate: 100, checked: true },
                { name: 'Ivan', surname: 'Petrol', position: 'worker', days: 20, rate: 70, checked: true },
                { name: 'Igor', surname: 'Nabokov', position: 'worker', days: 10, rate: 50, checked: true },
            ],
            showField: true
        }
    };

    deleteWorker = (index) => {
        this.setState(({ workers }) => {
            const newArrayWorkers = [
                ...workers.slice(0, index),
                ...workers.slice(index + 1)
            ];

            return {
                workers: newArrayWorkers
            }
        })
    };

    addField = () => {
        this.setState((showField) => {
            return {
                showField: !this.state.showField
            }
        })
    };

    addWorker = (data) => {
        this.setState(({ workers, showField }) => {
            const newArrayWorkers = [
                ...workers,
                data
            ];
            return {
                workers: newArrayWorkers,
                showField: !this.state.showField
            }
        })
    };

    render() {

        var sum = 0;

        const worker = this.state.workers.map((item, index) => {
            if (item.checked) sum += item.days * item.rate
            
            return <ValueDefaultTable
                key={index}
                name={item.name}
                surname={item.surname}
                position={item.position}
                days={item.days}
                rate={item.rate}
                checked={item.checked}
                index={index}
                deleteItem={() => this.deleteWorker(index)}
            />
            
            
        });

        return (
            <div>
                <TitleTable
                    TitleTable={sum + ' $'}
                />
                {worker}                
                <AddTable
                    newWorker={(worker) => this.addWorker(worker)} />
            </div>
        )
    }
};

export default DefaultTable;