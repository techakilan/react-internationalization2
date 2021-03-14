import {LOCALES} from '../I18n/locales';
import {AppContext} from '../Context'

import './style.css';
import { useContext, useCallback } from 'react';
const Footer = () =>{  
    const {state, dispatch} =  useContext(AppContext);
    const setLanguage = useCallback((locale) =>{
        dispatch(
            {
                type:'setLocale',
                locale
            }
        )
    },[]);
     return(
        <div className="App-footer">
            <ul>
                <li>
                    <button disabled={state.locale===LOCALES.ENGLISH} onClick={()=>setLanguage(LOCALES.ENGLISH)}>English</button>
                </li>
                <li>
                    <button disabled={state.locale===LOCALES.FRENCH} onClick={()=>setLanguage(LOCALES.FRENCH)}>French</button>
                </li>
            </ul>
        </div>
    )
}
export default Footer;