export default {
    name: 'scroll',
    type: 'object',
    fieldsets: [
        {
            name: 'scroll_fieldset',
        }
    ],
    fields: [
        {
            name: 'text',
            title: 'Button text',
            type: 'string',
            fieldset: 'scroll_fieldset'
        },
        {
            name: 'url',
            title: 'Button url',
            type: 'string',
            fieldset: 'scroll_fieldset'
        },
        {
            name: 'effect',
            title: 'Scroll effect',
            type: 'string',
            options: {
                list: [
                    {title: 'Mouse', value: 'mouse'}
                ]
            },
            fieldset: 'scroll_fieldset'
        },
    ]
}