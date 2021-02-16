export default {
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
        {
            name: 'hero_title',
            type: 'title',
        },
        {
            name: 'hero_subtitle',
            type: 'subtitle'
        },
        {
            name: 'hero_body',
            title: 'Hero body',
            type: 'body'
        },
        {
            name: 'hero_content_positionX',
            title: 'Hero content horizontal position',
            type: 'string',
            options: {
                list: [
                    {title: 'Left', value: 'col-start-2 col-end-4'},
                    {title: 'Centre', value: 'col-start-4 col-end-6'},
                    {title: 'Right', value: 'col-start-5 col-end-7'}
                ]
            }
        },
        {
            name: 'hero_content_positionY',
            title: 'Hero content vertical position',
            type: 'string',
            options: {
                list: [
                    {title: 'Top', value: 'row-start-1'},
                    {title: 'Middle', value: 'row-start-3'},
                    {title: 'Bottom', value: 'row-start-5'}
                ]
            }
        },
        {
            name: 'hero_background',
            title: 'Hero background',
            type: 'background'
        },
        {
            name: "quick_links",
            title: "Quick links",
            type: "array",
            of: [{title: "Quick link", type: "button"}]
        },
        {
            name: "hero_scroll",
            title: "Hero scroll",
            type: 'scroll'
        },
        {
            name: 'hero_image',
            title: 'Hero image',
            type: 'image',
        },
        {
            name: 'columns',
            title: 'Columns',
            type: 'pageColumns'
        },
        {
            name: 'socials',
            title: 'Socials',
            type: 'array',
            of: [{title: 'Social link', type: 'social'}]
        }
    ],
}