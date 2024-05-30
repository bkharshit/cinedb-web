import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-900 ">
      <div className="w-full mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"><Link to="/" className="hover:underline">CineDB</Link>. Created By <b>Harshit B K</b>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://linkedin.com/in/bkharshit/" target="_blank"  rel="noreferrer" className="hover:underline me-4 md:me-6">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/bkharshit" target="_blank"  rel="noreferrer" className="hover:underline me-4 md:me-6">Github</a>
          </li>
          <li>
            <a href="https://leetcode.com/u/bkharshit/" target="_blank"  rel="noreferrer" className="hover:underline me-4 md:me-6">Leetcode</a>
          </li>
          <li>
            <a href="https://www.instagram.com/harshitbk" target="_blank"  rel="noreferrer" className="hover:underline">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

