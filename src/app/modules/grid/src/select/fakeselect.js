export const MetaData = {
    classList: ['select'],
    width:150,
    selectable:{
        classList:  ['grid__column', 'grid__column--30', 'grid__column--center'],
        selected:{
            classList:['grid__column__selectable','grid__column__selectable--selected'],
        },
        unselected:{
            classList:['grid__column__selectable'],
        },
    },
    list: {
        classList: ['list'],
        actions: [],
        rows: {
            row: {
                classList: ['list__item'],
            },
            rowColumns: {
                classList: ['list__item__row'],
            },
        }
    },
    columns: [
        {
            classList: ['grid__column', 'grid__column--100'],
            attribute: 'text',
            decorators: [],
            visible:true,
        },
        {
            classList: ['grid__column', 'grid__column--100', 'grid__column--right'],
            attribute: 'products',
            converter: {
                type: 'productsConverter',
                params: ['products'],
                classList: ['converter'],
            },
            decorators: [],
            visible:true,
        }
    ]
};