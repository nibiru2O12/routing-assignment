import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import './Courses.css';
import { NavLink } from 'react-router-dom';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        selectedCourse : null
    }

    handleSelectCourse = (course) => {
        this.setState({
            selectedCourse:course
        });

        console.log(course)
    }


    render () {
        //const {url} = this.props.match;

        /*
        const courses = this.state.courses.map( course => {
            return (
                    <NavLink to={ '/courses/' + course.id + '/' + course.title } key={course.id}>
                        <article className="Course" key={course.id}>
                            {course.title}
                        </article>
                    </NavLink>
            );
        } );
        */
        const courses = this.state.courses.map( course => {
            return (
                <article className="Course" 
                         key={course.id}
                         onClick={()=>this.handleSelectCourse(course)}>
                    {course.title}
                </article>
            );

        } );
        

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {courses}
                </section>
                {
                    this.state.selectedCourse ? <Course course={this.state.selectedCourse} /> : null
                }
                
            </div>
        );
    }
}

export default Courses;