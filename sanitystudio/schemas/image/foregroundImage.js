export default {
    name: 'foreground_image',
    type: 'object',
    fieldsets: [
        {
            name: 'foreground_img_fieldset',
        }
    ],
    fields: [
        {
            name: "img",
            title: "Image",
            type: 'image',
            options: {
                hotspot: true,
                crop: true
            },
            fieldset: 'foreground_img_fieldset'
        },
        {
            name: 'overlay',
            title: 'Show image overlay',
            type: 'boolean',
            fieldset: 'foreground_img_fieldset'
        },
        {
            name: 'shape',
            title: 'Image shape',
            type: 'string',
            options: {
                list: [
                    {title: 'Rounded corners', value: '5px'},
                    {title: 'Circle', value: '100%'}
                ]
            },
            fieldset: 'foreground_img_fieldset'
        },
    ]
}