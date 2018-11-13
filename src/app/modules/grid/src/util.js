function getKey(key, name) {
    if (key) {
        return `${key}.${name}`
    }
    else
    {
        return name;
    }
}

export function flatObject(obj, key) {
    return Object.entries(obj || {}).reduce((a, b) => {
        if (Array.isArray(b[1])) {
            a[`${getKey(key, b[0])}.length`] = b[1].length;
        }
        else if (typeof b[1] === 'object') {
            let newObj = flatObject(b[1], getKey(key, b[0]));
            Object.entries(newObj).forEach(property => {
                a[property[0]] = property[1];
            });
        }
        else {
            a[getKey(key, b[0])] = b[1];

        }
        return a;
    }, {});
}