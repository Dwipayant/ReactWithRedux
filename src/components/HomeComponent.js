import React from 'react';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoData: []
        }
    }
    componentDidMount() {
        fetch('tasks').then((resp) => resp.json()).then(function(data) {
            console.log(data);
            this.setState({
                todoData : data  
            });
        }).catch(function(error) {
            console.log(error);
        }); 
    }
    render() {
        return(
            <div>
                <h1>Home Component { this.state.todoData }</h1>
            </div>);
    }
}

export default HomeComponent;