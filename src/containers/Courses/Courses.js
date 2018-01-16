import React, { Component } from 'react';

import './Courses.css';
import { NavLink } from 'react-router-dom';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {

        //const {url} = this.props.match;
        
        const courses = this.state.courses.map( course => {
            return (
                    <NavLink to={ '/course/' + course.id } key={course.id}>
                        <article className="Course" key={course.id}>
                            {course.title}
                        </article>
                    </NavLink>
            );
        } );

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {courses}
                </section>
            </div>
        );
    }
}

export default Courses;