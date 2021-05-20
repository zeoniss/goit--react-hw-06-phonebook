import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import s from '../ContactList/ContactList.module.css';
import actions from '../../redux/actions';

const ContactList = ({ contactsForList, onDeleteContact }) => (
  <ul className={s.contactList}>
    {contactsForList.length > 0 && (
      <h2 className={s.contactList_subtitle}> Contacts </h2>
    )}

    {contactsForList.map(contact => (
      <li key={uuidv4()} className={s.contactList_item}>
        <span className={s.contactList_elem}> {contact.name}:</span>
        <span>{contact.number} </span>

        <button
          type="button"
          className={s.contactList_button}
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contactsForList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const getVisibleContacts = (allContacts, filter = '') => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

const mapStateToProps = ({ contacts: { items, filter } }) => {
  const visibleContacts = getVisibleContacts(items, filter);
  return {
    contactsForList: visibleContacts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
