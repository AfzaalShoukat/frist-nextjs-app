export default function Footer(){
    return (
        <footer className="bg-blue-600 text-white p-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} My Next.js App. All rights reserved.</p>
          </div>
      
          <div className="flex flex-wrap justify-center space-x-6">
            <a href="/" className="hover:underline">Terms of Service</a>
            <a href="/" className="hover:underline">Privacy Policy</a>
            <a href="/" className="hover:underline">Contact Us</a>
          </div>
        </div>
      </footer>
      
    )
}