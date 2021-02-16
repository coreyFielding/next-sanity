export default {
    name: 'image_text',
    type: 'object',
    fieldsets: [
        {name: 'image_text_fieldset'}
    ],
    fields: [
        {
            name: 'image_pos',
            title: 'Image position',
            type: 'string',
            options: {
                list: [
                    {title: 'Left', value: 'left'},
                    {title: 'Right', value: 'right'},
                ]
            },
            fieldset: 'image_text_fieldset'
        },
        {
            name: 'img',
            type: 'foreground_image',
            fieldset: 'image_text_fieldset'
        },
        {
            name: 'text',
            type: 'string',
            fieldset: 'image_text_fieldset'
        },
        {
            name: 'background_colour',
            type: 'string',
            options: {
                list: [
                    {title: 'None', value: ''},
                    {title: 'Light', value: 'cararra-50'}
                ]
            },
            fieldset: 'image_text_fieldset'
        }
    ]
}