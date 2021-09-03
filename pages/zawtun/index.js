import styles from '../../styles/Zawtun.module.css'
import Link from 'next/link';

export const getStaticProps = async() =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return{
        props:{users: data}
    }
};

const Zawtun = ({users}) => {
    
    return (  
        <div>
            <h1>User Lists</h1>  
            {users.map(user=>(
                <Link href = {'/zawtun/'+ user.id} key = {user.id}>
                    <a className = {styles.single}>
                        <h3>{user.name}</h3>
                    </a>
                    
                </Link>
            ))}
        </div> 
 
    );
}
 
export default Zawtun;