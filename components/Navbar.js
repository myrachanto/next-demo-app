import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="logo">
            <Image src="/logo.png" width={70} height={30}/>
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>about</a></Link>
        <Link href="/blogs"><a>Listing</a></Link>
        </nav> 
     );
}
 
export default Navbar;