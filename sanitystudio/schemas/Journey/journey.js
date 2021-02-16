export default {
    name: 'journey',
    type: 'object',
    fields: [
        {
            name: 'journey_step',
            type: 'array',
            of: [{type: 'image_text'}]
        }
    ]
}