type ValidType = object | number | boolean | symbol | string;

// this exists for type inference

const isValidObject = (value: object | any) => {
    if (Object.keys(value).length === 0) {
        return false
    } else {
        return true
    }
}

const invalidValues = [
    null,
    undefined,
    NaN,
    Infinity,
    -Infinity,
    '',
    {},
    [],
    0,
    false,
]
export const IsValid = <T extends ValidType>(t: T | null | undefined): t is T => {
    if (typeof t === 'object') {
        return isValidObject(t)
    }
    return !invalidValues.includes(t);
}
