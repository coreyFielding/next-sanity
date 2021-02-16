export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Project title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'blocks',
            title: 'Blocks',
            type: 'array',
            of: [
                {type: 'hero'},
                {type: 'contact'}
            ]
        },
        {
            name: 'project_stack',
            type: 'badges'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title'
            }
        }
    ],
}