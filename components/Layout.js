import Footer from "./Footer"
import Navbar from "./Navbar"
import { useState } from "react";

const Layout = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    return ( 
        <div className = "content" id = {`${darkMode && "dark-mode"}`} >
            <Navbar
                darkMode={darkMode}
                setDarkMode = {setDarkMode}
            />
            {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;