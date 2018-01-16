import React, { Component } from 'react';

class Course extends Component {

    state = {
        id:null,title:null
    }

    componentDidMount(){
        const {id,title} = this.props.match.params;
        this.setState({id,title});
    }


    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.state.id}</p>
            </div>
        );
    }
}

export default Course;