export const MetaData = {
    classList: ['grid'],
    selectable: {
        classList: ['grid__column', 'grid__column--30', 'grid__column--center'],
        selected: {
            classList: ['grid__column__selectable', 'grid__column__selectable--selected'],
        },
        unselected: {
            classList: ['grid__column__selectable'],
        },
    },
    header: {
        classList: ['grid__header'],
        actions: [],
        row: {
            classList: ['grid__header__row'],
        }
    },
    body: {
        classList: ['grid__body'],
        actions: [],
        rows: {
            row: {
                classList: ['grid__body__row'],
            },
            rowColumns: {
                classList: ['grid__body__row__columns'],
            },
        }
    },
    footer: {
        paginator: true,
        selector: true,
        records: {
            classList: ['select'],
            width: 150,
            data:[
                { text: '15 registros',products:50 },
                { text: '20 registros' },
                { text: '25 registros' },
                { text: '50 registros' },
            ],
            selectable: {
                classList: ['grid__column', 'grid__column--30', 'grid__column--center'],
                selected: {
                    classList: ['grid__column__selectable', 'grid__column__selectable--selected'],
                },
                unselected: {
                    classList: ['grid__column__selectable'],
                },
            },
            list: {
                classList: ['list'],
                closeList:false,
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
                    visible: true,
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
                    visible: true,
                }
            ]
        },
    },
    columns: [
        {
            text: 'Hello',
            classList: ['grid__column', 'grid__column--100'],
            attribute: 'hello',
            sortable: true,
            decorators: [],
            visible: true,
        },
        {
            text: 'info.',
            classList: ['grid__column', 'grid__column--100', 'grid__column--center'],
            attribute: 'subgrid',
            visible: true,
            grid: {

                classList: ['subgrid'],
                header: {
                    classList: ['subgrid_header'],
                    actions: [],
                    row: {
                        classList: ['grid__header__row', 'subgrid__header__row'],
                    }
                },
                body: {
                    classList: ['subgrid__body'],
                    actions: [],
                    rows: {
                        row: {
                            classList: ['grid__body__row'],
                        },
                        rowColumns: {
                            classList: ['subgrid__body__row__columns'],
                        },
                    },

                },
                columns: [
                    {
                        text: 'Hello',
                        classList: ['grid__column', 'grid__column--100'],
                        attribute: 'hello',
                        sortable: false,
                        visible: true,
                    }
                ]
            },
        },
        {
            text: 'World',
            //classListHeader:[],
            classList: ['grid__column', 'grid__column--100', 'grid__column--right'],
            classListBody: ['grid__column--bold'],
            attribute: 'world',
            width: 300,
            sort: 'asc',
            sortable: true,
            decorators: [],
            visible: true,
        },
        {
            text: 'Boolean',
            type: 'Boolean',
            classList: ['grid__column', 'grid__column--100', 'grid__column--center'],
            classListBody: ['grid__column__boolean'],
            attribute: 'bool',
            sortable: true,
            sort: 'desc',
            decorators: [],
            visible: true,
        },
        {
            text: 'productos',
            classList: ['grid__column', 'grid__column--100', 'grid__column--right'],
            attribute: 'products',
            converter: {
                type: 'productsConverter',
                params: ['products'],
                classList: ['converter'],
            },
            decorators: [],
            visible: true,
        },
        
        {
            text: 'productos',
            classList: ['grid__column', 'grid__column--100', 'grid__column--right'],
            attribute: 'products',
            converter: {
                type: 'productsConverter',
                params: ['products'],
                classList: ['converter'],
            },
            decorators: [],
            visible: true,
        },

        {
            text: 'productos',
            classList: ['grid__column', 'grid__column--100', 'grid__column--right'],
            attribute: 'products',
            converter: {
                type: 'productsConverter',
                params: ['products'],
                classList: ['converter'],
            },
            decorators: [],
            visible: true,
        },

        {
            text: 'productos',
            classList: ['grid__column', 'grid__column--100', 'grid__column--right'],
            attribute: 'products',
            converter: {
                type: 'productsConverter',
                params: ['products'],
                classList: ['converter'],
            },
            decorators: [],
            visible: true,
        },

        {
            text: 'productos',
            classList: ['grid__column', 'grid__column--100', 'grid__column--right'],
            attribute: 'products',
            converter: {
                type: 'productsConverter',
                params: ['products'],
                classList: ['converter'],
            },
            decorators: [],
            visible: true,
        },

        {
            text: 'productos',
            classList: ['grid__column', 'grid__column--100', 'grid__column--right'],
            attribute: 'products',
            converter: {
                type: 'productsConverter',
                params: ['products'],
                classList: ['converter'],
            },
            decorators: [],
            visible: true,
        },

        {
            text: 'productos',
            classList: ['grid__column', 'grid__column--100', 'grid__column--right'],
            attribute: 'products',
            converter: {
                type: 'productsConverter',
                params: ['products'],
                classList: ['converter'],
            },
            decorators: [],
            visible: true,
        },

        {
            text: 'productos',
            classList: ['grid__column', 'grid__column--100', 'grid__column--right'],
            attribute: 'products',
            converter: {
                type: 'productsConverter',
                params: ['products'],
                classList: ['converter'],
            },
            decorators: [],
            visible: true,
        }, {
            text: 'productos',
            classList: ['grid__column', 'grid__column--100', 'grid__column--right'],
            attribute: 'products',
            converter: {
                type: 'productsConverter',
                params: ['products'],
                classList: ['converter'],
            },
            decorators: [],
            visible: true,
        },
        {
            text: 'productos',
            classList: ['grid__column', 'grid__column--100', 'grid__column--right'],
            attribute: 'products',
            converter: {
                type: 'productsConverter',
                params: ['products'],
                classList: ['converter'],
            },
            decorators: [],
            visible: true,
        },
        {
            text: 'productos',
            classList: ['grid__column', 'grid__column--100', 'grid__column--right'],
            attribute: 'products',
            converter: {
                type: 'productsConverter',
                params: ['products'],
                classList: ['converter'],
            },
            decorators: [],
            visible: true,
        },
        {
            text: 'productos',
            classList: ['grid__column', 'grid__column--100', 'grid__column--right'],
            attribute: 'products',
            converter: {
                type: 'productsConverter',
                params: ['products'],
                classList: ['converter'],
            },
            decorators: [],
            visible: true,
        },
        {
            text: 'productos',
            classList: ['grid__column', 'grid__column--100', 'grid__column--right'],
            attribute: 'products',
            converter: {
                type: 'productsConverter',
                params: ['products'],
                classList: ['converter'],
            },
            decorators: [],
            visible: true,
        },
        {
            text: 'productos',
            classList: ['grid__column', 'grid__column--100', 'grid__column--right'],
            attribute: 'products',
            converter: {
                type: 'productsConverter',
                params: ['products'],
                classList: ['converter'],
            },
            decorators: [],
            visible: true,
        },
        {
            text: 'productos',
            classList: ['grid__column', 'grid__column--100', 'grid__column--right'],
            attribute: 'products',
            converter: {
                type: 'productsConverter',
                params: ['products'],
                classList: ['converter'],
            },
            decorators: [],
            visible: true,
        },
    ]
}