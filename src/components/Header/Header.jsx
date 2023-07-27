import './header.css';

const Header = () => {
    return ( 
    <header className="header">
        <div className="container">
            <div className="header-block">
                <h1 className="header-title lng-header-title">Galina Drobysheva</h1>
                <nav className="header-menu">
                    <ul>
                        <li><a href="#work" className="lng-header-el-1">Work</a></li>
                        <li><a href="#education" className="lng-header-el-2">Education</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    );
}
 
export default Header;