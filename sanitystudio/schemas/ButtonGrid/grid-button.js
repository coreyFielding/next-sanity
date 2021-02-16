export default {
    name: 'grid-button',
    type: 'object',
    fieldsets: [
        {
            name: 'grid-button_fieldset',
        }
    ],
    fields: [
        {
            name: 'button_text',
            type: 'string',
            fieldset: 'grid-button_fieldset'
        },
        {
            name: 'button_url',
            type: 'string',
            fieldset: 'grid-button_fieldset'
        },
        {
            name: 'button_shape',
            type: 'string',
            options: {
                list: [
                    {title: 'Default', value: ''},
                    {title: 'Rounded', value: 'rounded-lg'}
                ]
            },
            fieldset: 'grid-button_fieldset'
        },
        {
            name: 'button_colour',
            type: 'string',
            options: {
                list: [
                    {title: 'Light', value: 'white'},
                    {title: 'Dark', value: 'royal-600'}
                ]
            },
            fieldset: 'grid-button_fieldset'
        }
    ]
}