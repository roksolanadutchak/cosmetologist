import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return (
            <div>
                <nav >
                    <ul className="nav-ul">
                        <li className="nav-li">
                            <Link to="/add-client" className="nav-link">Додати клієнта</Link>
                        </li>
                        <li className="nav-li">
                            <Link to="/clients" className="nav-link">Список клієнтів</Link>
                        </li>
                        <li className="nav-li">
                            <Link to="/questions" className="nav-link">Додати питання</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
}
export default Header