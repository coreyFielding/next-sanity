export default {
    name: 'button',
    type: 'object',
    fieldsets: [
        {
            name: 'btn_fieldset',
        }
    ],
    fields: [
        {
            name: 'text',
            title: 'Button text',
            type: 'string',
            fieldset: 'btn_fieldset'
        },
        {
            name: 'url',
            title: 'Button url',
            type: 'string',
            fieldset: 'btn_fieldset'
        },
        {
            name: 'colour',
            title: 'Button colour',
            type: 'string',
            options: {
                list: [
                    {title: 'None', value: ''},
                    {title: 'Azure', value: 'azure-500'},
                    {title: 'Indigo', value: 'indigo-400'},
                    {title: 'Purple', value: 'purple-400'},
                    {title: 'Blue Ribbon', value: 'blueRibbon-500'},
                    {title: 'Cararra', value: 'cararra-50'}
                ]
            },
            fieldset: 'btn_fieldset'
        },
        {
            name: 'text_colour',
            title: 'Text colour',
            type: 'string',
            options: {
                list: [
                    {title: 'Light', value: 'white'},
                    {title: 'Dark', value: 'black'},
                ]
            },
            fieldset: 'btn_fieldset'
        },
        {
            name: 'shape',
            title: 'Button shape',
            type: 'string',
            options: {
                list: [
                    {title: 'Pill', value: 'rounded-full'},
                    {title: 'Rounded', value: 'rounded-md'},
                    {title: 'Default', value: 'rounded-none'}
                ]
            },
            fieldset: 'btn_fieldset'
        },
        {
            name: 'style',
            title: 'Button style',
            type: 'string',
            options: {
                list: [
                    {title: 'Solid', value: 'solid'},
                    {title: 'Outline', value: 'outline'}
                ]
            }
        },
        {
            name: 'size',
            title: 'Button size',
            type: 'string',
            options: {
                list: [
                    {title: 'Small', value: 'w-20'},
                    {title: 'Medium', value: 'w-40'},
                    {title: 'Large', value: 'w-60'}
                ]
            },
            fieldset: 'btn_fieldset'
        },
        {
            name: 'icon',
            title: 'Button icon',
            type: 'string',
            options: {
                list: [
                    {title: 'Arrow left', value: 'chevron-left'},
                    {title: 'Arrow right', value: 'chevron-right'},
                    {title: 'Arrow down', value: 'chevron-down'},
                ]
            }
        },
        {
            name: 'hover_effect',
            title: 'Hover effect',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                list: [
                    {title: 'Fill', value: 'fill'},
                    {title: 'Outline', value: 'outline'},
                    {title: 'Shadow', value: 'shadow'},
                    {title: 'Expand', value: 'expand'},
                    {title: 'Rise', value: 'rise'},
                ]
            }
        },
    ]
}