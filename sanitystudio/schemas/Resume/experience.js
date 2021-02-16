export default {
    name: 'experience',
    type: 'object',
    fieldsets: [
        {name: 'experience_fieldset'}
    ],
    fields: [
        {
            name: 'job_title',
            type: 'string',
            fieldset: 'experience_fieldset'
        },
        {
            name: 'company',
            type: 'string',
            fieldset: 'experience_fieldset'
        },
        {
            name: 'job_duration',
            type: 'string',
            fieldset: 'experience_fieldset'
        },
        {
            name: 'achievements',
            type: 'string',
            fieldset: 'experience_fieldset'
        }
    ]
}