import { Link } from 'react-router-dom'
import logo from '../image/Copy of Inovexa_log_3.0.png'

export default function Logo({ className = 'flex items-center gap-3', to = '/' }) {
  return (
    <Link to={to} className={className} aria-label="Inovexa home">
      <img
        src={logo}
        alt="Inovexa logo"
        className="h-10 w-auto object-contain sm:h-12"
      />
    </Link>
  )
}

