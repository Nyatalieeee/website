interface LinkItems {
    name: string;
    link?: string;
    username?: string;
    id: number;
}

type LinkArray = Array<LinkItems>;

const links: LinkArray = [
    {
        name: 'Discord',
        username: '@nyatalieeee',
        id: 1,
    },
    {
        name: 'git.gay',
        link: 'https://git.gay/nyatalie',
        id: 2,
    },
    {
        name: 'GitHub',
        link: 'https://github.com/Nyatalieeee',
        id: 3,
    },
    {
        name: 'Mastodon (tech.lgbt)',
        link: 'https://tech.lgbt/@ideltic',
        id: 4,
    },
    {
        name: 'Twitter (NOT x)',
        link: 'https://x.com/Nyatalieeeee',
        id: 5,
    },
    {
        name: 'Pronouns.page',
        link: 'https://en.pronouns.page/@Nyatalieeee',
        id: 6,
    },
    {
        name: '<3',
        link: 'https://github.com/Nyameliaaaa',
        id: 7,
    },
];

export default links;
