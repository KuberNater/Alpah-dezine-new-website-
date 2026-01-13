import { IRedirectLinks } from "@/types/redirectLink.type";

export const footerData: IRedirectLinks[] = [
    {
        name: "Solutions",
        services: [
            {
                name: "Collegiate Licensing",
                href: "/collegiate-licensing"
            },
            {
                name: "Devops",
                href: "/devops"
            },
            {
                name: "AI Agent Development",
                href: "/ai-agent-development"
            },
            {
                name: "Asset Management",
                href: "/creative-asset-management"
            }
        ]
    },
    // {
    //     name: "Company",
    //     services: [
    //         {
    //             name: "About Us",
    //             href: "/"
    //         },
    //         {
    //             name: "Philosophy",
    //             href: "/"
    //         },
    //         {
    //             name: "Case Studies",
    //             href: "/"
    //         },
    //         {
    //             name: "Careers",
    //             href: "/"
    //         }
    //     ]
    // },
    {
        name: "Resources",
        services: [

            {
                name: "Blog",
                href: "/blogs"
            },

        ]
    },
    {
        name: "Get Started",
        services: [
            {
                name: "Book a Demo",
                href: "/contact-us"
            },

        ]
    },
]

export const footerLinks: IRedirectLinks[] = [
    {
        name: "Privacy Policy",
        href: "/privacy-policy"
    },
    {
        name: "Terms of Service",
        href: "/terms-of-service"
    },
    {
        name: "Security",
        href: "/security"
    },
]