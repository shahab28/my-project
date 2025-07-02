import {Link} from "@inertiajs/react";

export default function pagination({Links}) {
    return (
        <nav className="mt-4">
            {Links.map(Link =>(
                <link>{link.label}</link>
            ))}
        </nav>
    )
}