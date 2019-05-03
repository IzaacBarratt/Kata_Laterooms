import React,{Component} from 'react'
import { connect } from 'react-redux'
import AccomCard from '../Component/AccomCard'
import { filterAccom } from '../Utils'


class AccomContainer extends Component {

    createAccom = (data, num) => {
        const { onClick } = this.props;
        return (
            <AccomCard accom={data} onClick={() => { onClick(num) }}/>
        )
    }

    render() {
        const { createAccom } = this;
        const { accom, filters } = this.props;
        var body = [];

        const filtAccom = filterAccom(filters, accom);

        if (accom === undefined || accom.length === 0 || filtAccom.length === 0) {
            return (
                <div id="accomContainer">
                    <p>No items currently available</p>
                </div>
            )
        }

        for (var i = 0; i < filtAccom.length; i ++) {
            const item = filtAccom[i];
            body.push(
                createAccom(item, i)
            )
        }

        return (
            <div>
                <div className="accomContainer">
                    
                    {body}
                </div>
            </div>
        )

    }
}


const mapStateToProps = state => {
    return {
      filters: state.filters,
      accom: state.accom,
      state: state
    }
  }
  
  
export default connect(mapStateToProps)(AccomContainer)

