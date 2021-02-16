export default {
    name: 'key_skills',
    type: 'object',
    fieldsets: [
        {name: 'skills_fieldset'}
    ],
    fields: [
        {
            name: 'skill_type',
            title: 'Skill type',
            type: 'string',
            options: {
                list: [
                    {title: 'Technical skill', value: 'technical'},
                    {title: 'Personal skill', value: 'personal'},
                ]
            }
        },
        {
            name: 'skill_name',
            title: 'Skill',
            type: 'string',
        },
        {
            name: 'skill_level',
            title: 'Skill level',
            type: 'number',
            options: {
                list: [
                    {title: 'Understanding', value: 1},
                    {title: 'Experienced', value: 2},
                    {title: 'Proficient', value: 3},
                    {title: 'Expert', value: 4},
                ]
            }
        }
    ]
}