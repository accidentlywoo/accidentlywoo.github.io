import React from 'react';

const velogList = [
    {id: 1, title: "HOME"},
    {id: 2, title: "JAVA"},
    {id: 3, title: "SPRING"},
    {id: 4, title: "JPA"},
    {id: 5, title: "PYTHON"},
    {id: 6, title: "JAVASCRIPT"},
    {id: 7, title: "REACT"},
  ];

const Nav = () => { 
    return (
        <nav className="navbar">
          <ul>
            {velogList.map(el => (
              <li><button className="btn btn-default">{el.title}</button></li>
            ))}
          </ul>
        </nav>
    );
  }
  export default Nav;