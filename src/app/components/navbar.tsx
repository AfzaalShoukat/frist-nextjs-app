import Link from "next/link"
export default function Navbar(){
   return (
    <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="hover:underline">My app</Link> 
            <div className="space-x-4">
            <Link href="/" className="text-white hover:underline">Home</Link>
            <Link href="/" className="text-white hover:underline">About</Link>
            <Link href="/" className="text-white hover:underline">Contact</Link>
            </div>
        </div>
    </nav>
   )
}