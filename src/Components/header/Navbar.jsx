import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import styles from '../../header.module.css'

export default function Navbar(){
    return(
        <>
            <nav className={styles.navbar}>

                <img src="src/assets/iracambi-logo.png" alt="" />
                
                <div className={styles.search}>

                    <FontAwesomeIcon className={styles.lupa} icon={faMagnifyingGlass} />
                    <input type="text" placeholder="Pesquisar produtos" />

                </div>
                <div>

                    <a href="./Cart"><FontAwesomeIcon icon={faCartShopping} /> Carrinho</a>
                    <a href="./Conta"><FontAwesomeIcon icon={faUser} /> Conta</a>

                </div>
            </nav>        
            
        </>
    )
}

