import React, { Component } from 'react';

class Course extends Component {

    render () {
        const {id,title} = this.props.course;
        return (
            <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID: {id}</p>
            </div>
        );
    }
}

export default Course;