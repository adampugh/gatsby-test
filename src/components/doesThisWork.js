import React, { Component } from 'react';

class DoesThisWork extends Component {
    componentDidMount() {
        alert('hello');
    }

    render() {
        return (
            <div>
                <h1>Rendered</h1>
            </div>
        )
    }
}

export default DoesThisWork;