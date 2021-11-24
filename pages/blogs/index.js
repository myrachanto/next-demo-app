import style from '../../styles/Blog.module.css'
import Link from 'next/link'
export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
        props:{users:data}
    }
}
const Blogs = ({users}) => {

    return ( 
        <div className="blogs">
            {users && users.map(user =>(
                <div className="d" key={user.id}>
                    <Link href={`/blogs/${user.id}`}><a href="" className={style.single}>
                        <h3>{user.name}</h3>
                    </a></Link>
                </div>
            ))}
        </div>
     );
}
 
export default Blogs;