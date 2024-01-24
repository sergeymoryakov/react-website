/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                SEPPO.digital
            </Link>
            <ul>
                <CustomLink to="/intro">intro</CustomLink>
                <CustomLink to="/career">career</CustomLink>
                <CustomLink to="/contacts">contacts</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <>
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>
                    {children}
                </Link>
            </li>
        </>
    );
}

CustomLink.PropTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
