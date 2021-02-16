export default {
    name: 'contact',
    type: 'object',
    fieldsets: [
        {
            name: 'contact_fieldset',
            title: 'Contact',
        }
    ],
    fields: [
        {
            name: 'email',
            title: 'Email link',
            type: 'button'
        },
        {
            name: 'contact_form',
            type: 'form'
        },
        {
            name: 'social_links',
            title: 'Social links',
            type: 'array',
            of: [{type: 'social'}]
        }
    ]
}