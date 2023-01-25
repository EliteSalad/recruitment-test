import React, { Component, useState } from 'react';

export default class App extends Component {



    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            newEmployee: 'employee name',
            newEmployeeValue: '12345'
        }

        this.AddEmployee = this.AddEmployee.bind(this);
        this.ModifyEmployee = this.ModifyEmployee.bind(this);
        this.RemoveEmployee = this.RemoveEmployee.bind(this);

    }

    componentDidMount = () => {
        fetch('http://localhost:41478/employees')
            .then(res => res.json()) 
            .then(json => {
                console.log(json)
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    }
    

    AddEmployee = (event) => {
        event.preventDefault();
        console.log("SaveNewNameCalled");
        console.log(this.state.items);
        this.state.setState({
            items: [...this.items, { name: "test", value: 2318 }],
        });
        console.log(this.state.items);
    }

    ModifyEmployee = (event) => {
        event.preventDefault();
        console.log("SaveNewNameCalled");
    }

    RemoveEmployee = (event) => {
        event.preventDefault();
        console.log("SaveNewNameCalled");
    }




    render() {
        var { isLoaded, items, newEmployee, newEmployeeValue } = this.state;
        //this.setState({
        //    items: [...items, { name: "test", value: 2318 }],
        //});



        if (!isLoaded) { 
        return <div>Loading...</div>;
        }
            else {
                return (<div className="App">
                    <h1>Data has been loaded</h1>
                    <form onSubmit>
                        <div>Employee And Value</div>
                        <input type="text" value={newEmployee} name="text" id="text" required  />
                        <input type="number" value={newEmployeeValue}  name="number" id="number" required />
                        <button type="submit" name="btn-list" id="btn-list" onClick={this.AddEmployee.bind(this)}>Add</button>
                        <button name="btn-list" id="btn-list" onClick={this.RemoveEmployee.bind(this)}>Remove</button>
                        <button name="btn-list" id="btn-list" onClick={this.ModifyEmployee.bind(this)}>Modify</button>
                        <input type="submit" />
                    </form>
                    <div id="container">
                    <ul>
                        {
                                items.map((item, index) => 
                                    <li key={index}>
                                        {item.name} {item.value}
                                        <input type="checkbox"></input>
                                    </li>
                                    
                            )
                        }
                        </ul>

                    </div>
                </div>)
        };
        
    return (
        <body>
 
        </body>
    );
  }
}
