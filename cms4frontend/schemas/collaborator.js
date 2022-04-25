export default {
    name: 'collaborator',
    title: 'Collaborator',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'bio',
            title: 'bio',
            type: 'string',
        },
        {
            name: 'linkedin',
            title: 'LinkedIn URL',
            type: 'string',
        },
    ],

    preview: {
        select: {
            title: 'name',
            media: 'mainImage',
        },
        prepare(selection) {
            return Object.assign({}, selection)
        },
    },
}
