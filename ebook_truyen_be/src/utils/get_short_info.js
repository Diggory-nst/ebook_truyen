
// NOTE: object of objects must have to object

function getShortInfo(objects) {
    const { fields, object } = objects;

    const result = {}

    fields.forEach(item => {
        result[item] = object[item]
    });

    return result;
}

function getShortInfoV2(objects) {

    const { fields, object } = objects;
    return object.map(obj => {
        const item = {};
        fields.forEach(field => {
            item[field] = obj[field];
        });
        return item;
    });
}

export { getShortInfo, getShortInfoV2 }