import React, {useState} from "react";
import {useHistory, Link} from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();
  const searchHero = (e) => {
    setInputValue(e.target.value);
  };
  const submitHero = () => {
    history.push("/search?hero=" + inputValue);
    setInputValue("");
  }
  const history2 = useHistory();
  const logout = () => {
    localStorage.clear();
    history2.push("/login");
  };

  return ( 
      <header>
        <nav className={styles.Nav}>  
            <form className={styles.Form} onSubmit={submitHero}>
                <div className={styles.Nlink}>
                    <Link style={{textDecoration: 'none'}} to="/" >
                      <h2 className={styles.H1}> Team </h2> 
                    </Link>
                </div>
                <input className={styles.Input}
                    type='text' placeholder='Find the hero' 
                    value={inputValue} onChange={searchHero} 
                    aria-label='Search' 
                  />
                 <button className={styles.Button}>
                      <svg onClick={logout} xmlns="http://www.w3.org/2000/svg" width="40" height="20" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                         <path fillrule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                          <path fillrule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                      </svg>
                 </button>  
            </form>
        </nav>
      </header>  
 )
};
export default Navbar;