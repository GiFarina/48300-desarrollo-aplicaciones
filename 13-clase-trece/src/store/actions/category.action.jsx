export const SELECT_CATEGORY = 'SELECT_CATEGORY'

export const selectCategory = (id)=>({
    type: SELECT_CATEGORY,
    categoryId:id,
})