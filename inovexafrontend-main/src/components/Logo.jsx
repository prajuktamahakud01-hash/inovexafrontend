import { Link } from 'react-router-dom'
import logo from '../image/Copy of Inovexa_log_3.0.png'

export default function Logo({ className = 'flex items-center gap-3', imgClassName = '', to = '/' }) {
  return (
    <Link to={to} className={className} aria-label="Inovexa home">
      <img
        src={logo}
        alt="Inovexa logo"
        className={`h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${imgClassName}`}
      />
    </Link>
  )
}

