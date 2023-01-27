import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { addingFilterValue } from 'redux/contactsSlice/filterSlice/filterSlice'
    
export const  Filter = () => {

    //reading filterValue from redux store state "filter"
    const filterValue = useSelector(state => state.filter)
    
    // assigning dispatch func
    const dispatch = useDispatch()



        return (
        <label htmlFor="filter">
                <input name="filter" type="text" value={filterValue} onChange={(e) =>
                    dispatch(addingFilterValue(e.currentTarget.value))} />
        </label>
       
    )
    }
    


Filter.propTypes = {
    inputValue: PropTypes.string,
    filterFunc: PropTypes.func
}