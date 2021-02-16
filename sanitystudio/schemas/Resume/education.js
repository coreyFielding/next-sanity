export default {
    name: 'education',
    type: 'object',
    fieldsets: [
        {name: 'education_fieldset'}
    ],
    fields: [
        {
            name: 'institute_name',
            title: 'Institute',
            type: 'string',
            fieldset: 'education_fieldset'
        },
        {
            name: 'attended',
            title: 'Years attended',
            type: 'string',
            fieldset: 'education_fieldset'
        },
        {
            name: 'degree_study',
            title: 'Degree of study',
            type: 'string',
            fieldset: 'education_fieldset'
        },
        {
            name: 'degree_grade',
            title: 'Final grade',
            type: 'string',
            fieldset: 'education_fieldset'
        }
    ]
}