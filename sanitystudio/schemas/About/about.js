export default {
    name: 'about',
    title: 'About',
    type: 'object',
    fields: [
        {
            name: 'about_profile',
            type: 'profile'
        },
        {
            name: 'about_bio',
            title: 'Bio',
            type: 'text'
        },
        {
            name: 'about_avatar',
            title: 'Avatar',
            type: 'foreground_image',
            options: {
                hotspot: true,
                crop: true
            },
        },
        {
            name: "hire_status",
            title: "Available for hire",
            type: 'boolean',
        },
        {
            name: "contact_btn",
            title: "Contact button",
            type: 'button',
        },
    ],
}