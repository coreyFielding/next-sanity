export default {
    name: 'title',
    type: 'object',
    fieldsets: [
        {
            name: 'title_fieldset',
            title: 'Hero title',
            options: {
                collapsible: true
            }
        }
    ],
    fields: [
        {
            name: 'text',
            title: 'Title text',
            type: 'string',
            fieldset: 'title_fieldset'
        },
        {
            name: 'colour',
            title: 'Title colour',
            type: 'string',
            options: {
                list: [
                    {title: 'White', value: 'text-cararra-50'},
                    {title: 'Light Gray', value: 'text-royal-300'},
                    {title: 'Blue Gray', value: 'text-royal-400'}

                ]
            },
            fieldset: 'title_fieldset'
        },
        {
            name: 'size',
            title: 'Title size',
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
            fieldset: 'title_fieldset'
        },
        {
            name: 'weight',
            title: 'Font weight',
            type: 'string',
            options: {
                list: [
                    {title: 'Thin', value: 'font-thin'},
                    {title: 'Extra-light', value: 'font-extralight'},
                    {title: 'Light', value: 'font-light'},
                    {title: 'Normal', value: 'font-normal'},
                    {title: 'Bold', value: 'font-bold'},
                    {title: 'Extra-bold', value: 'font-extrabold'},
                    {title: 'Extra-extra-bold', value: 'font-black'}
                ]
            },
            fieldset: 'title_fieldset'
        },
        {
            name: 'posX',
            title: 'Title X position',
            type: 'string',
            options: {
                list: [
                    {title: 'Left', value: 'text-left'},
                    {title: 'Centre', value: 'text-center'},
                    {title: 'Right', value: 'text-right'}
                ]
            },
            fieldset: 'title_fieldset'
        }
]
}