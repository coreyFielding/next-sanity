export default {
    name: "pageColumns",
    type: "object",
    title: "Columns",
    fields: [
        {
            name: "columns",
            type: "array",
            of: [
                {name: "column", title: "Column", type: "column"}
            ]
        },
    ],
    preview: {
        select: {
            columns: 'columns'
        },
        prepare({columns = []}) {
            const titles = []
            columns.forEach(col => titles.push(col.title))
            return {
                title: titles.join(', '),
                subtitle: columns.length === 1 ? `1 Column` : `${columns.length} Columns`
            }
        }
    }
}