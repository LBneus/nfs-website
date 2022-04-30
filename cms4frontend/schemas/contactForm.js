export default {
    name: 'contactForm',
    title: 'Contact Popup',
    type: 'document',
    fields: [
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
            name: 'contactName',
            title: 'Contact Name',
            type: 'string',
        },
        {
            name: 'contactEmail',
            title: 'Contact Email',
            type: 'string',
        },
        {
            name: 'contactPosition',
            title: 'Contact Position',
            type: 'string',
        }
    ],

    preview: {
        select: {
            title: 'title',
        },
        prepare(selection) {
            return Object.assign({}, selection)
        },
    },
}
