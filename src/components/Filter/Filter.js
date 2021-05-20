import { v4 as uuidv4 } from 'uuid';
import s from '../Filter/Filter.module.css';
import { connect } from 'react-redux';

import actions from '../../redux/actions';

const Filter = ({ onFilterValue, value }) => (
  <>
    <p className={s.filter_title}>Find contacts by name:</p>
    <label htmlFor={uuidv4()} />
    <input
      className={s.filter_input}
      id={uuidv4()}
      type="text"
      name="filter"
      onChange={onFilterValue}
      value={value}
    />
  </>
);
const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onFilterValue: e => dispatch(actions.changeFilter(e.currentTarget.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
