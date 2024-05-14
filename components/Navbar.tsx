import Link from "next/link";
import Image from "next/image";
import {NAV_LINKS} from "@/constants";
import Button from "@/components/Button";

// TODO: The nav bar section is partially completed, not 100%

const Navbar = () => {
    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
            <Link href={"/"}>
                <Image src="/hilink-logo.svg" alt="logo" width={74} height={26}/>
            </Link>
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((NAV_LINK) => (
                    <Link
                        href={NAV_LINK.href}
                        key={NAV_LINK.key}
                        className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                    >
                        {NAV_LINK.label}
                    </Link>
                ))}
            </ul>
            <div className="hidden lg:flexCenter">
                <Button
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
                />
            </div>
            // TODO: The hamburger menu section should be completed in the future.
            <Image
                src="menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inlineBlock cursor-pointer lg:hidden"
            />
        </nav>
    );
};

export default Navbar;