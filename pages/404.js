import  Link  from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            //router.go(-1) go to backward 1 and + go to forward
            router.push('/');
        },3000)
    },[]);

    return ( 
    <div className = "not-found"> 
        <h1>Ooooooo...</h1>
        <h2>That page cannot be Found</h2>
        <p>Go back to the <Link href = '/'><a>HOME</a></Link></p>
    </div>
     );
}
 
export default NotFound;