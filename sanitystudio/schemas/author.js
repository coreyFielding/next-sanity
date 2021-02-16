export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
      {
        name: 'hero',
        title: 'Hero',
        type: 'hero',
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
}
