export default {
    name: 'project_block',
    type: 'object',
    fields: [
        {
            title: 'Project',
            name: 'project_ref',
            type: 'reference',
            to: [{type: 'project'}]
        },
        {
            title: 'Project title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Project description',
            name: 'description',
            type: 'string',
        },
        {
            title: 'Project link',
            name: 'link',
            type: 'button',
        },
        {
            title: 'Project logo',
            name: 'logo',
            type: 'foreground_image',
        },
    ]
}