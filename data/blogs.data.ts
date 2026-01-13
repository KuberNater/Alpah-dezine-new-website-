import { IBlogPostCard } from "@/types/blogs/blogPostCard.types";
import { IFeatureCard } from "@/types/blogs/featureCard.types";

export const blogFeatureCardData: IFeatureCard = {
    genre: "Market Analysis",
    time: "10 min read",
    title: "Why You Won't Find Oxford University T-Shirts at a London Sports Shop",
    description: "A deep dive into the uniquely American market of collegiate licensing, and why the model doesn't translate across the Atlantic.",
    author: "Dr. Marcus Webb",
    company: "Global Licensing Strategist",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "University campus vs Retail",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    authorImageAlt: "Author Image",
    href: "/blogs/what-is-collegiate-licensing"
}

export const posts: IBlogPostCard[] = [
    {
        title: "Why You Won't Find Oxford University T-Shirts at a London Sports Shop",
        excerpt: 'Licensors are becoming more aggressive with audits. Here is your checklist to stay audit-ready 365 days a year.',
        category: 'Collegiate Licensing',
        author: 'Sarah Jenkins',
        date: 'Oct 12, 2024',
        readTime: '5 min',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
        slug: '/what-is-collegiate-licensing'
    },
    // {
    //     title: 'The Cost of Imprecision: A Financial Breakdown',
    //     excerpt: 'We analyzed $125M in industry losses. The data reveals that 80% of penalties stem from simple version control errors.',
    //     category: 'DevOps',
    //     author: 'Michael Ross',
    //     date: 'Oct 08, 2024',
    //     readTime: '6 min',
    //     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    //     featured: true,
    //     slug:'navigating-the-2025-licensing-audit-landscape2'
    // },
    // {
    //     title: 'Automating the Mundane: AI in Asset Management',
    //     excerpt: 'How machine learning is categorizing creative assets faster than humanly possible, freeing up creative teams.',
    //     category: 'DevOps',
    //     author: 'James Carter',
    //     date: 'Sep 29, 2024',
    //     readTime: '4 min',
    //     image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    //     slug:'navigating-the-2025-licensing-audit-landscape3'
    // },
    // {
    //     title: 'Stakeholder Alignment for Global Brands',
    //     excerpt: 'Bridging the gap between manufacturers in Asia and licensing teams in New York using a single source of truth.',
    //     category: 'Collegiate Licensing',
    //     author: 'Elena Rodriguez',
    //     date: 'Sep 22, 2024',
    //     readTime: '7 min',
    //     image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    //     slug:'navigating-the-2025-licensing-audit-landscape4'
    // },
    // {
    //     title: 'Why Excel is Killing Your Approval Workflow',
    //     excerpt: 'Spreadsheets break. They lack version history. It’s time to move to a purpose-built approval platform.',
    //     category: 'Asset Management',
    //     author: 'David Kim',
    //     date: 'Sep 15, 2024',
    //     readTime: '5 min',
    //     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    //     slug:'navigating-the-2025-licensing-audit-landscape5'
    // },
    // {
    //     title: 'The Future of Collegiate Licensing',
    //     excerpt: 'NIL, digital goods, and the changing definition of "merchandise". What to expect in the next 5 years.',
    //     category: 'Asset Management',
    //     author: 'Sarah Jenkins',
    //     date: 'Sep 10, 2024',
    //     readTime: '9 min',
    //     image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop',
    //     slug:'navigating-the-2025-licensing-audit-landscape6'
    // }
];