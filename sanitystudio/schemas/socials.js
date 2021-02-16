export default {
    name: 'social',
    type: 'object',
    fieldsets: [
        {
            name: 'socials_fieldset',
        }
    ],
    fields: [
        {
            name: 'icon',
            title: 'Social link',
            type: 'string',
            options: {
                list: [
                    {title: 'GitHub', value: 'github'},
                    {title: 'LinkedIn', value: 'linkedin'},
                    {title: 'Instagram', value: 'instagram'},
                    {title: 'Messenger', value: 'messenger'},
                ]
            },
            fieldset: 'socials_fieldset'
        },
        {
            name: 'url',
            title: 'Social url',
            type: 'string',
            fieldset: 'socials_fieldset'
        },
    ]
}