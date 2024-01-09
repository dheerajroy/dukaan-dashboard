import { Link } from 'react-router-dom'

export default function NavLink({ icon, href, className, children }) {
    return (
        <Link to={href} className={`px-[16px] py-[8px] text-link flex gap-[12px] w-[208px] items-start ${className}`}>
            {icon}
            <div className="text-[14px]">{children}</div>
        </Link>
    )
}
