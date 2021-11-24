import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
const Notfound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(()=> {
            router.push("/")
        }, 3000)
    }, [])
    return ( 
        <div className="not-found">
            <h1>Sorry the page cannot be found</h1>
            <p><Link href="/"><a>go back to homepage</a></Link></p>
        </div>
     );
}
 
export default Notfound;