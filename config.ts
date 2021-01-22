import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { NavbarLinkProps } from "./components/navbar-link"

type SocialLinkProps = {
    icon: IconProp,
    url: string
}

type ConfigProps = {
    socialLinks: SocialLinkProps[],
    navbarLinks: NavbarLinkProps[]
    blogDescription: string
}

// config.ts
const Config: ConfigProps = {
    socialLinks: [
        {
            icon: faTwitter,
            url: "https://twitter.com/rishabk7"
        },
        {
            icon: faLinkedin,
            url: "https://linkedin.com/in/rishabkumar7"
        },
        {
            icon: faGithub,
            url: "https://github.com/rishabkumar7"
        }
    ],
    navbarLinks: [
        {
            text: "Portfolio",
            href: "https://rishabkumar.com"
        },
        // {
        //    text: "Link 3",
        //    href: "#"
        //}
    ],
    blogDescription: "I write tech articles about my side-projects"
}

export default Config