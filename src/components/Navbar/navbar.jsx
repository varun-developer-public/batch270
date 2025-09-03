import { Link } from "react-router-dom";


function NavBar() {
  return (
    <header className="w-full shadow-md">
      {/* Top Bar */}
      <nav className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo + Brand */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/instagram-logo.jpg"
              alt="Logo"
              className="h-8"
            />
            <span className="text-xl font-semibold text-gray-800 dark:text-white">
              Instagram Clone
            </span>
          </a>

          {/* Right Side Links */}
          <div className="flex items-center gap-6 text-sm">
            <span
              className="text-gray-600 dark:text-gray-300 hover:underline cursor-default"
            >
             Welcome, User
            </span>
            <a
              href="#"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </nav>

      {/* Bottom Menu */}
      <nav className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 py-2">
          <ul className="flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
            <li>
      
                <Link to="/">Home</Link>
            </li>
            <li>
              
                <Link to={"/postList"} className="hover:text-blue-600 dark:hover:text-blue-400">Posts</Link>

            </li>
            <li>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                Reels
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                Stories
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
