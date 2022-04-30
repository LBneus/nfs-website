export default {
    name: 'menuItems',
    title: 'Menu Items',
    type: 'document',
    fields: [
        {
            name: 'item',
            title: 'Item',
            type: 'string',
        },
        {
            name: 'route',
            title: 'Route',
            type: 'string',
        },
        {
            name: 'index',
            title: 'Index',
            type: 'number',
        }
    ],

    preview: {
        select: {
            title: 'item',
        },
        prepare(selection) {
            return Object.assign({}, selection)
        },
    },
}
