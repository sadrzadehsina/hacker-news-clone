export const sortByScore = (first, second) => first.score > second.score ? 1 : -1;

export const paginate = (items, page) => {
	const start = 20 * page;
	return items.splice(start, start + 20);
};