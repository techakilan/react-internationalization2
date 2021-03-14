import {FormattedMessage} from 'react-intl';
import './style.css';

const Header = () =>{
    const menu = {
        'home':'https://google.com',
        'about':'sify.com',
        'blog':'blogger.com',
        'contacts':'thales.com',
    }
     return(
        <header className="App-header">
        <nav>
            <ul>
                {
                    Object.keys(menu)
                        .map(
                            key =>(
                                <li key={key}>
                                <a href={menu[key]}>
                                    <FormattedMessage id={`menu.${key}`} />
                                </a>
                            </li>
                            )
                            
                        )
                }
            </ul>
        </nav>
        </header>
    )
}
export default Header;