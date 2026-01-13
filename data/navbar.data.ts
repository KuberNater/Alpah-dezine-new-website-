import { IRedirectLinks } from "@/types/redirectLink.type";

export const NavbarData: IRedirectLinks[] = [
    {
        name: 'How We Help',
        services: [
            {
                name: 'DevOps & Software Development',
                href: '/devops'
            },
            {
                name: 'Collegiate Licensing',
                href: '/collegiate-licensing'
            },
            {
                name: 'AI Agent Deployment',
                href: '/ai-agent-development'
            },
            {
                name: 'Creative Asset Management',
                href: '/creative-asset-management'
            },
        ]
    },
    {
        name: 'Ideas',
        services: [
            {
                name: 'Blogs',
                href: '/blogs'
            },

        ]
    },
    {
        name: 'Say Hello',
        href: '/contact-us'
    }
]