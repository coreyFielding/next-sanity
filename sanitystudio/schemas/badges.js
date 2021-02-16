export default {
    name: 'badges',
    type: 'object',
    fields: [
        {
            name: 'tech_stack',
            title: 'Tech stack',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                list: [
                    {title: 'React', value: 'React'},
                    {title: 'Gatsby', value: 'Gatsby'},
                    {title: 'Vue.js', value: 'Vue.js'},
                    {title: 'Next.js', value: 'Next.js'},
                    {title: 'TailwindCSS', value: 'TailwindCSS'},
                    {title: 'GraphQL', value: 'GraphQL'},
                    {title: 'Bootstrap', value: 'Bootstrap'},
                    {title: 'TypeScript', value: 'TypeScript'},
                ]
            }
        },
    ]
}