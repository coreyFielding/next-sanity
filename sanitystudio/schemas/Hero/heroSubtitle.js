export default {
    name: 'subtitle',
    type: 'object',
    fieldsets: [
        {
            name: 'subtitle_fieldset',
            title: 'Hero subtitle',
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
            fieldset: 'subtitle_fieldset'
        },
        {
            name: 'colour',
            title: 'Text colour',
            type: 'string',
            options: {
                list: [
                    {title: 'White', value: 'text-cararra-50'},
                    {title: 'Blue Gray', value: 'text-royal-300'}
                ]
            },
            fieldset: 'subtitle_fieldset'
        },
        {
            name: 'size',
            title: 'Text size',
            type: 'string',
            options: {
                list: [
                    {title: 'xs', value: 'text-xs'},
                    {title: 'Small', value: 'text-sm'},
                    {title: 'Medium', value: 'text-xl'},
                    {title: 'Large', value: 'text-2xl'},
                    {title: 'xl', value: 'text-6xl'}
                ]
            },
            fieldset: 'subtitle_fieldset'
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
            fieldset: 'subtitle_fieldset'
        }
    ]
}