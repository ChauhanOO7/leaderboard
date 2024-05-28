import {Link} from "react-router-dom";

export default function Navbar()
{
    return (
        <nav className="navbar">
            <ul>
                <Link to='/'><li>Leaderboard</li></Link>
                <Link to='/newpage'><li>historical Trading</li></Link>
                <Link to='/newpage'><li>Historical Chart</li></Link>
                <Link to='/newpage'><li>Scanners</li></Link>
                <Link to='/newpage'><li>Alerts</li></Link>
                <Link to='/newpage'><li>Basic Backtest</li></Link>
                <Link to='/newpage'><li>Advanced Backtest</li></Link>
                <Link to='/newpage'><li>Pricing</li></Link>
                <Link to='/newpage'><li>My Earnings</li></Link>
            </ul>
        </nav>
    );
}
