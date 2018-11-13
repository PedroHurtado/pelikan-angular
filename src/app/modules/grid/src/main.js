import { Grid } from './grid.js';
import { MetaData } from './fakegrid.js'
import { converters } from './converters.js'




let grid = new Grid(MetaData);
let element = grid.render();
document.addEventListener('DOMContentLoaded', function () {
    //element.addEventListener('click', function () {
    grid.data = [
        {
            hello: 1, world: 'hello world', products: 100, bool: true, subgrid: [
                { hello: 1 },
                { hello: 2 },
                { hello: 3 },
                { hello: 4 },
            ]
        },
        { hello: 2, world: 'hello world' },
        { hello: 3, world: 'hello world' },
        { hello: 4, world: 'hello world' },
        { hello: 5, world: 'hello world' },
        { hello: 6, world: 'hello world' },
        { hello: 1, world: 'hello world' },
        { hello: 2, world: 'hello world' },
        { hello: 3, world: 'hello world' },
        { hello: 4, world: 'hello world' },
        { hello: 5, world: 'hello world' },
        { hello: 6, world: 'hello world' },
        { hello: 1, world: 'hello world' },
        { hello: 2, world: 'hello world' },
        { hello: 3, world: 'hello world' },
        { hello: 4, world: 'hello world' },
        { hello: 5, world: 'hello world' },
        { hello: 6, world: 'hello world' },
        { hello: 1, world: 'hello world' },
        { hello: 2, world: 'hello world' },
        { hello: 3, world: 'hello world' },
        { hello: 4, world: 'hello world' },
        { hello: 5, world: 'hello world' },
        { hello: 6, world: 'hello world' },
        { hello: 1, world: 'hello world' },
        { hello: 2, world: 'hello world' },
        { hello: 3, world: 'hello world' },
        { hello: 4, world: 'hello world' },
        { hello: 5, world: 'hello world' },
        { hello: 6, world: 'hello world' },
        { hello: 1, world: 'hello world' },
        { hello: 2, world: 'hello world' },
        { hello: 3, world: 'hello world' },
        { hello: 4, world: 'hello world' },
        { hello: 5, world: 'hello world' },
        { hello: 6, world: 'hello world end' },
    ];
    //}, false)
    let main = document.querySelector('.main');
    main.appendChild(element);
})

