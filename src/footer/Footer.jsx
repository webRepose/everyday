import Style from '../styles/Footer/Footer.module.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <section className={Style.footer}>
                    <ul>
                        <li>
                        <NavLink to='/'>
                            <button>
                                Todo
                            </button>
                        </NavLink>
                        </li>
                        <li>
                            <NavLink to='/training'>
                                <button>
                                    Training
                                </button>
                            </NavLink>
                        </li>
                    </ul>
            </section>
        </footer>
    );
};

export default Footer;