export default {
    name: 'landing',
    title: 'Landing Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'blocks',
            title: 'Blocks',
            type: 'array',
            of: [
                {type: 'hero'},
                {type: 'button-grid'},
                {type: 'about'},
                {type: 'journey'},
                {type: 'project_block'},
                {type: 'resume'},
                {type: 'contact'}
            ]
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title'
            }
        }
    ]
}