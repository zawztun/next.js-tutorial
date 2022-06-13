/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import Link  from "next/link";
import Image from "next/image";


const Navbar = ({darkMode,setDarkMode}) => {
    
    return ( 
    <nav>
        <div className = "logo">
             <Link href = "/"> 
             <a>
             <Image src="/logo.png" width={30} height={30} />
             </a>
          </Link>
          
        </div>
        <Link href = "/"><a>Home</a></Link>
        <Link href = "/about"><a>About</a></Link>
            <Link href="/zawtun"><a>Zawtun List</a></Link>  
            <button className="dark" onClick = {()=>setDarkMode(pre=>!pre)}>D&T</button>
    
    </nav>
     );
}
 
export default Navbar;

