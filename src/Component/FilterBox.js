import React,{Component} from 'react'
import { connect } from 'react-redux'
import {
    addSearchFilter,
    removeSearchFilter,
    clearSearchFilter
} from '../redux/actions'

const filterOptions = [
    'car park',
    'pool',
    'gym',
    'helicopter pad',
    'bird farm'
]


class FilterBox extends Component {


    state = { selected: [] };

    toggleItem = (item) => {
        const { addFilter, removeFilter, filters } = this.props;

        if (filters.includes(item)) {
            removeFilter(item);
        } else {
            addFilter(item);
        }
    }

    clearSelectItem = () => {
        const { clearFilter } = this.props;
        clearFilter();
    }

    render() {

        var filters = [];
        const statefilters = this.props.filters;
        const { toggleItem } = this;

        for (var i = 0; i < filterOptions.length; i ++) {
            const item      = filterOptions[i];
            const checked   = statefilters.includes(item);

            filters.push(
                <div className="filter" key={"filter-" + item} style={{ width: 200, backgroundColor: 'gray', padding: 20 }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <h4>{item}</h4>
                        <input defaultChecked={checked} onClick={() => { toggleItem(item) }} type="checkbox"/>
                    </div>
                </div>  
            )
        }           

        return (
            <div className="filter_container">   
                {filters}
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
      filters: state.filters,
      state: state
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        addFilter: filter => { dispatch( addSearchFilter(filter) ) },
        removeFilter: filter => { dispatch( removeSearchFilter(filter) ) },
        clearFilter: () => { dispatch ( clearSearchFilter() ) }
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(FilterBox)