export const SELECT_BREAD = 'SELECT_BREAD';
export const FILTER_BREADS = 'FILTER_BREADS'

export const selectBread = (breadId) => ({
    type: SELECT_BREAD,
    breadId,
})

export const filterBreads = (categoryId) => ({
    type: FILTER_BREADS,
    categoryId,
})