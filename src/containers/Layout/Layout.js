import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Layout extends Component{

    render(){
        return(
            <div className='Layout'>

                <nav>
                    <li><NavLink to='/users'>Users</NavLink></li>
                    <li><NavLink to='/courses'>Courses</NavLink></li>
                </nav>
                
                {this.props.children}
            </div>
        );
    }

}

export default Layout;