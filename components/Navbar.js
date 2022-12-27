import Link from "next/link";


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Blog</h1>
            <div className="links">
                <Link href="/">Home</Link>
                <Link href="/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;