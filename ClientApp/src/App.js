import React, { Component, useState } from 'react';

export default class App extends Component {



    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
        this.headers = [
            { key: 'id', label: 'Id' },
            { key: 'id', label: 'Employee' },
            { key: 'id', label: 'Value' }
        ]
    }


    componentDidMount() {
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
    

    //componentDidMount() {
    //    fetch('http://localhost:41478/employees')
    //    .then(function (result) {
    //        return result.text();
    //    })
    //    .then(function (result) {
    //        console.log('here is our content:', result);
    //    })
    //    .catch(function (err) {
    //        console.error(err.message);
    //    })
    //}

    render() {
        const HandleClick = () => {
            console.log("buttons work");
        }
        var { isLoaded, items } = this.state;

        if (!isLoaded) { 
        return <div>Loading...</div>;
        }
            else {
                return (<div className="App">
                    <h1>Data has been loaded</h1>
                    <form>
                        <input type="text" name="text" id="text" required/>
                            <button type="submit" class="btn-list">
                            </button>
                    </form>
                    <ul>
                        {items.map(item => (
                            <><li key={item.name}>
                                {item.name}  {item.value}
                            </li><input type="checkbox" className="selectsingle" value="1" /></>
                            ))}
                    </ul>
                </div>)
        };
        
    return (
        <body>
            <div className="container"><h1>Testing 1 2 3 </h1>
                <button tpye="button" className="btn btn-danger">Delete Selected Employee</button>
                <button onClick={HandleClick} tpye="button" className="btn btn-danger">Load Employees</button>
            <table className="table table-bordered table-striped">
            <thread>
                <tr>
                    {   this.headers.map(function (h) {
                            return (
                                <th key={h.key}>{h.label}</th>
                            )
                        })
                    }
                </tr>
                    </thread>
                    <tbody>
                        <tr>
                            <td>
                                <input type="checkbox" className="selectsingle" value="1" />
                                1
                            </td>
                            <td>Xavier</td>
                            <td>420</td>
                        </tr>
                    </tbody>
            </table>
            </div>

        </body>
    );
  }
}
