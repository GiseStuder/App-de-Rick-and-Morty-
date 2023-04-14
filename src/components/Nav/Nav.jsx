import style from "./Nav.module.css";
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch, setAccess }) => {
    const handleLogOut = () => {
        setAccess(false);
    }

    return (
        <nav className={style.nav}>

            <div className={style.btns}>
                <Link to='/about'>ABOUT</Link>
                <Link to='/home'>HOME</Link>
                <Link to='/favorites'> FAVORITOS</Link>
            

            <button className={style.log} onClick={handleLogOut}>LOG OUT</button>
            <SearchBar  onSearch={onSearch}/>
            </div>
        </nav>
    )
}

export default Nav;