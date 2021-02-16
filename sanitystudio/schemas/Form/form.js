
export default {
    name: 'form',
    type: 'object',
    fieldsets: [
        {
            name: 'form_fieldset',
        },
    ],
    fields: [
        {
            name: 'title',
            title: 'Form title',
            type: 'string'
        },
        {
            name: 'subtitle',
            title: 'Form subtitle',
            type: 'string'
        },
        {
            name: 'background_colour',
            title: 'Form colour',
            type: 'string',
            options: {
                list: [
                    {title: 'light', value: 'cararra-50'}
                ]
            }
        },
        {
            name: 'fields',
            title: 'Form fields',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                list: [
                    {title: 'Name', value: '<label for="name">Name</label><input id="name" type="text" placeholder="Your full name"/>'},
                    {title: 'Email', value: '<label for="email">Email</label><input id="email" type="text" placeholder="Your email"/>'},
                    {title: 'Subject', value: '<label for="subject">Subject</label><select id="subject" name="subject" type="text" placeholder="What do you need?"><option value="website">Website</option></select>'},
                    {title: 'Message', value: '<label for="message">Message</label><input id="message" type="text" placeholder="Tell me a bit more"/>'},
                ]
            }
        },
        {
            name: 'submit',
            title: 'Submit button',
            type: 'button'
        },
    ]
}