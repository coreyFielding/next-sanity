export default {
    name: 'profile',
    type: 'object',
    fieldsets: [
        {name: 'profile_fieldset'}
    ],
    fields: [
        {
            name: 'name',
            title: 'Full name',
            type: 'string'
        },
        {
            name: 'profession',
            title: 'Profession',
            type: 'string'
        },
        {
            name: 'degree',
            title: 'University degree',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string'
        },
        {
            name: 'years_experience',
            title: 'Years of experience',
            type: 'string',
            options: {
                list: [
                    {title: '1', value: '1'},
                    {title: '1.5', value: '1.5'},
                    {title: '2', value: '2'}
                ]
            }
        },
        {
            name: 'contributions',
            title: 'Projects contributed to',
            type: 'number',
            options: {
                list: [
                    {title: '1', value: 1},
                    {title: '2', value: 2},
                    {title: '3', value: 3}
                ]
            }
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'string',
            options: {
                list: [
                    {title: '1', value: '1'},
                    {title: '2', value: '2'},
                    {title: '5+', value: '5+'},
                ]
            }
        },
    ]
}