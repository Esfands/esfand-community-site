import { useRouter } from 'next/router';
import Link from 'next/link';

export const NavLink = ({ children, activeClassName, ...props}) => {
    const { asPath } = useRouter();
    const className = asPath === props.href || asPath === props.as ?
    const isActive = router.asPath === (href === "/home" ? "/" : href);
    return (
        <Link href={href === "/home" ? "/" : href} passHref>
        <a
            href={href === "/home" ? "/" : href}
            className={`${isActive && "nav_item_active"} nav_item`}
        >
            {text}
        </a>
        </Link>
    );
}