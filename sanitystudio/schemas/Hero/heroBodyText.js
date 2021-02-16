export default {
    name: 'body',
    type: 'object',
    fieldsets: [
        {
            name: 'body_fieldset',
            title: 'Hero body',
            options: {
                collapsible: true
            }
        }
    ],
    fields: [
        {
            name: 'text',
            title: 'Text',
            type: 'string',
            fieldset: 'body_fieldset'
        },
        {
            name: 'colour',
            title: 'Text colour',
            type: 'string',
            options: {
                list: [
                    {title: 'Blue Gray', value: 'text-royal-300'}
                ]
            },
            fieldset: 'body_fieldset'
        },
        {
            name: 'size',
            title: 'Text size',
            type: 'string',
            options: {
                list: [
                    {title: 'xs', value: 'text-xs'},
                    {title: 'Small', value: 'text-sm'},
                    {title: 'Medium', value: 'text-md'},
                    {title: 'Large', value: 'text-lg'}
                ]
            },
            fieldset: 'body_fieldset'
        },
        {
            name: 'posX',
            title: 'Text X position',
            type: 'string',
            options: {
                list: [
                    {title: 'Left', value: 'text-left'},
                    {title: 'Centre', value: 'text-center'},
                    {title: 'Right', value: 'text-right'}
                ]
            },
            fieldset: 'body_fieldset'
        }
    ]
}