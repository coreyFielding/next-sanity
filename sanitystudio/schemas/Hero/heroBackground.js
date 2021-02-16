export default {
    name: 'background',
    type: 'object',
    fieldsets: [{name: 'background_fieldset'}],
    fields: [
        {
            name: 'background_colour',
            title: 'Background Colour',
            type: 'string',
            options: {
                list: [
                    {title: 'Dark', value: 'black'},
                    {title: 'Light', value: 'gray-50'},
                    {title: 'White', value: 'white'}
                ]
            },
            fieldset: 'background_fieldset'
        },
        {
            name: 'background_gradient',
            title: 'Background Gradient',
            type: 'string',
            options: {
                list: [
                    {title: 'None', value: ''},
                    {title: 'Amin', value: 'from-blueRibbon-700 to-blueRibbon-900'},
                    {title: 'Royal', value: 'from-royal-500 to-royal-400'},
                    {title: 'Sky', value: 'from-skyDark to-skyLight'},
                    {title: 'Clouds', value: 'from-cararra-500 to-carrara-50'},
                ]
            },
            fieldset: 'background_fieldset'
        },
        {
            name: 'gradient_direction',
            title: 'Background Gradient Direction',
            type: 'string',
            options: {
                list: [
                    {title: 'To right', value: 'bg-gradient-to-r'},
                    {title: 'To left', value: 'bg-gradient-to-l'},
                    {title: 'To bottom', value: 'bg-gradient-to-b'},
                    {title: 'To top', value: 'bg-gradient-to-t'},
                ]
            },
            fieldset: 'background_fieldset'
        }
    ]
}