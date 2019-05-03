/*
 * action types
 */

export const ADD_SEARCH_FILTER      =   'ADD_SEARCH_FILTER'
export const REMOVE_SEARCH_FILTER   =   'REMOVE_SEARCH_FILTER'
export const CLEAR_SEARCH_FILTER    =   'CLEAR_SEARCH_FILTER'

export const ADD_ACCOM_ITEM         =   'ADD_ACCOM_ITEM'




export function addSearchFilter(filter) {
  return { type: ADD_SEARCH_FILTER, filter }
}

export function removeSearchFilter(filter) {
    return { type: REMOVE_SEARCH_FILTER, filter }
}

export function clearSearchFilter() {
    return { type: CLEAR_SEARCH_FILTER }
}
  
  


export function addAccomItem(data) {
  return { type: ADD_ACCOM_ITEM, data }
}

