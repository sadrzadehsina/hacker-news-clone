export const sortByScore = (first, second) => first.score > second.score ? 1 : -1;

export const paginate = (items, cursor) => items.splice(cursor, 20);