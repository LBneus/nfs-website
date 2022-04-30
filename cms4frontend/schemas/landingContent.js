export default {
    name: 'landingContent',
    title: 'Landing Page Content',
    type: 'document',
    fields: [
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'button',
            title: 'Button Title',
            type: 'string',
        },
        {
            name: 'buttonRoute',
            title: 'Button Route',
            type: 'string',
        }
    ],

    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
        },
        prepare(selection) {
            return Object.assign({}, selection)
        },
    },
}
