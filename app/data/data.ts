interface ProjectSlide {
    image: string
}

interface Works{
    image: string
    title: string
    description: string
    summary: string
    niche: string
    url: string
    live: string
}

export const projectSlide: ProjectSlide[] = [
    { image: '/project1.png' },
    { image: '/project3.png' },
    { image: '/project4.png' },
    { image: '/project5.png' },
    { image: '/project6.png' },
    { image: '/project7.png' },
    { image: '/project8.png' },
]

export const works: Works[] = [
    {
        image: '/project5.png',
        title: 'Clabed',
        description: 'a platform to purchase quality, reliable and foreign / nigerian used vehicles at affordable prices',
        summary: 'the best vehicle marketplace for reliable and affordable vehicles.',
        niche: 'ECOMM',
        url: 'https://clabedautos.com',
        live: 'LIVE'
    },
    {
        image: '/project8.png',
        title: 'LinkAnchor',
        description: 'earn passive income with your linkedin account. monetize your linkedin account and earn between $6 -  $18 per week',
        summary: 'your linkedin account is a digital asset.',
        niche: 'DIGITAL',
        url: 'https://linkanchor.network',
        live: 'LIVE'
    },
    {
        image: '/project3.png',
        title: 'MonadWhisper',
        description: "a platform to discover existing and new projects building on Monad. Follow up any of interest, and be part of community that's shaping the future of the fastest EVM",
        summary: "explore Monad's ecosystem.",
        niche: 'WEB3',
        url: 'https://monadwhisper.xyz',
        live: 'LIVE'
    },
    {
        image: '/project4.png',
        title: 'Dashboard',
        description: 'an ecommerce dashboard to manage inventory and monitor users with Superadmin priviledges',
        summary: 'making inventory management simple and easy.',
        niche: 'ECOMM',
        url: 'https://adminofsite.netlify.app',
        live: 'IN PROGRESS'
    },
    {
        image: '/project7.png',
        title: 'Waitlist',
        description: 'a platform to connect with authentic car dealers to buy and sell vehicles',
        summary: 'coming soon.',
        niche: 'ECOMM',
        url: 'https://waitlist.clabedautos.com',
        live: 'IN PROGRESS'
    },
    {
        image: '/project1.png',
        title: 'Astraeas',
        description: '',
        summary: '',
        niche: 'ECOMM',
        url: '',
        live: 'IN PROGRESS'
    },
    {
        image: '/project6.png',
        title: 'Golflefluer',
        description: '',
        summary: '',
        niche: 'ECOMM',
        url: 'https://cloth-store-gamma.vercel.app',
        live: 'LIVE'
    },
]