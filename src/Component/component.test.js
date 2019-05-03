import { createStore } from 'redux'
import React from 'react'
import reducer from '../redux/reducer'
import renderer from 'react-test-renderer'

import { 
    filterAccom
} from '../Utils/index'


const filter_item = 'helicopter pad'
const initial_state = {
    filters: [
        filter_item,
        'jacuuzi',
        'hospital'
    ],
    accom: [
        {
            id: 1,
            "name": "hotelone",
            "starRating": 5,
            "facilities": ["car park", "pool"]
        },
        {
            id: 2,
            "name": "hoteltwo",
            "starRating": 3,
            "facilities": ["car park", "gym"]
        },
        {
            id: 3,
            "name": "hotelthree",
            "starRating": 3,
            "facilities": []
        }
    ]
}

const store = createStore(reducer, initial_state);
import { 
    addSearchFilter,
    removeSearchFilter,
    clearSearchFilter
} from '../redux/actions'
import AccomCard from './AccomCard';


describe('Accom Items displaying', () => {

  it('matches using item 0', () => {
    const item = initial_state.accom[0];
    const tree = renderer.create(<AccomCard accom={item} />);
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot when using item 1', () => {
    const item = initial_state.accom[1];
    const tree = renderer.create(<AccomCard accom={item}/>);
    expect(tree).toMatchSnapshot();
  });

});

test('Changing filter reflects in redux cache', () => {

    // Try adding to state
    const newFilter = 'pool'
    var state = store.getState();

   
    store.dispatch(addSearchFilter(newFilter))
    
    expect.objectContaining({'filters': []});
    expect(state.filters).toEqual(expect.arrayContaining([newFilter]));    
    
    
    // Try removing
    store.dispatch(removeSearchFilter(filter_item));

    var state = store.getState();

    expect.objectContaining({'filters': []});
    expect(state.filters).toEqual(expect.not.arrayContaining([filter_item]))

    // Try clearing 
    store.dispatch(clearSearchFilter());

    var state = store.getState();

    expect.objectContaining({'filters': []});
    expect(state.filters).toEqual([])

})


test('Filter function removes items that aren\'t queried', () => {

    const state = store.getState();
    var filters = state.filters;
    var accom = state.accom;

    var output = filterAccom(filters, accom)
    expect(output).toEqual([])

    output = filterAccom(filters.concat('car park'), accom)
    expect(output.length).toEqual(2)

    output = filterAccom(filters.concat('gym'), accom)
    expect(output.length).toEqual(1)

})



