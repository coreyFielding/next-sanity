export default {
    name: 'background_image',
    type: 'object',
    fieldsets: [
        {
            name: 'background_img_fieldset',
        }
    ],
    fields: [
        {
            name: 'bg_img',
            title: 'Image',
            type: 'image',
            fieldset: 'background_img_fieldset'
        },
        {
            name: 'overlay',
            title: 'Show image overlay',
            type: 'boolean',
            fieldset: 'background_img_fieldset'
        },
        {
            name: 'width',
            title: 'Image width',
            type: 'number',
            options: {
                list: [
                    {title: '1000px', value: 1000},
                    {title: '1500px', value: 1500}
                ]
            },
            fieldset: 'background_img_fieldset'
        }
    ]
}