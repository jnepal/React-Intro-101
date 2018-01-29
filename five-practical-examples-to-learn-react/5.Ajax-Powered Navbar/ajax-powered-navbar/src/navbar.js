import React from 'react';

export default function Navbar(props) {

    let items = props.items.map((item, index) => (
        <NavbarItems key={index} {...item} />
    ));

    return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        {items}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function NavbarItems(props) {
    return (
        <li>
            <a href={props.href}>{props.text}</a>
        </li>
    );
}