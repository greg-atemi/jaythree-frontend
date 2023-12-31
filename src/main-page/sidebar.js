import "./main-page.css"
import pos from "./images/pos.svg"
import box from "./images/box.svg"
import home from "./images/home.svg"
import sales from "./images/sales.svg"
import stock from "./images/stock.svg"
import report from "./images/report.svg"
import { Link } from 'react-router-dom';

function NavList(){
    const links = [
        {id: 1, name: "Dashboard", path:"/", src: home},
        {id: 2, name: "Product", path:"/products", src: box},
        {id: 3, name: "POS", src: pos},
        {id: 4, name: "Stock", path:"/stock", src: stock},
        {id: 5, name: "Sales", src: sales},
        {id: 6, name: "Daily Reports", src: report},
        {id: 7, name: "Weekly Reports", src: report},
        {id: 8, name: "Monthly Reports", src: report}
    ];

    const linkItems = links.map(link =>
        <Link to={link.path}>
            <button key={link.id} className="">
                <img alt={link.name} className="nav-logo" src={link.src}/>{link.name}
            </button>
        </Link>
    );

    return (
        <>{linkItems}</>
    );
}

export default function Sidebar() {
    return (
        <div className="sidebar">
            <NavList />
        </div>
    );
}
