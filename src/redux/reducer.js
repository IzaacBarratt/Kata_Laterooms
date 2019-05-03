import {
  ADD_ACCOM_ITEM,
  ADD_SEARCH_FILTER,
  REMOVE_SEARCH_FILTER,
  CLEAR_SEARCH_FILTER
} from './actions'


const initialState = {
  filters: ['pool', 'gym'],
  accom: [
    {
      id: 1,
      "name": "hotelone",
      img: 'http://ihg.scene7.com/is/image/ihg/holiday-inn-the-colony-4629618286-4x3',
      "starRating": 5,
      "facilities": ["car park", "pool"]
    },
    {
      id: 2,
      "name": "hoteltwo",
      img: 'https://s-ec.bstatic.com/images/hotel/max1024x768/681/68184730.jpg',
      "starRating": 3,
      "facilities": ["car park", "gym"]
    },
    {
      id: 3,
      "name": "hotelthree",
      img: 'https://s-ec.bstatic.com/images/hotel/max1024x768/147/147997361.jpg',
      "starRating": 3,
      "facilities": ['bird farm']
    }
  ]
}



export default function accomApp(state = initialState, action) {

  console.log(action)
    
  switch (action.type) {

      case ADD_ACCOM_ITEM:
        const data = action.data;
        var nwState = Object.assign({}, state)

        if (Array.isArray(data)) {
          nwState.accom = nwState.accom.concat(data)
        } else {
          nwState.accom.push(data)
        }

        return nwState;
      

      // search filters ----------------------

      case ADD_SEARCH_FILTER:
        var filter = action.filter;
        var nwState = Object.assign({}, state)
        nwState.filters.push(filter)

        console.log(nwState)
        return nwState;

      case REMOVE_SEARCH_FILTER: 
        var filter = action.filter;
        var nwState = Object.assign({}, state);
        var filters = nwState.filters;
        
        // Check through filters and remove filter if matches
        for (var i = 0; i < filters.length; i ++) {
          if (filters[i] === filter) {
            filters.splice(i, 1);
            break;
          }
        }

        return nwState;

      case CLEAR_SEARCH_FILTER: 
        return Object.assign({}, state, { filters: [] })

      default:
        return state;
    }
  }