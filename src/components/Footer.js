import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-1 dark:bg-gray-800">
      <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">CineDB</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://linkedin.com/in/bkharshit/" target="_blank" className="hover:underline me-4 md:me-6">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/bkharshit" target="_blank" className="hover:underline me-4 md:me-6">Github</a>
          </li>
          <li>
            <a href="https://leetcode.com/u/bkharshit/" target="_blank" className="hover:underline me-4 md:me-6">Leetcode</a>
          </li>
          <li>
            <a href="https://www.instagram.com/harshitbk" target="_blank" className="hover:underline">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

