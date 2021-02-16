export default {
    name: 'resume',
    type: 'object',
    fieldsets: [
        { name: 'resume_fieldset'}
    ],
    fields: [
        {
            name: 'resume_education',
            title: 'Education',
            type: 'array',
            of: [{type: 'education'}]
        },
        {
            name: 'resume_experience',
            title: 'Work experience',
            type: 'array',
            of: [{type: 'experience'}]
        },
        {
            name: 'resume_skills',
            title: 'Skills',
            type: 'array',
            of: [{type: 'key_skills'}]
        }
    ]
}