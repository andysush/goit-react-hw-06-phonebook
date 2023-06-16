import { ContactItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      <ContactItem data={contacts} onDeleteContact={onDeleteContact} />
    </List>
  );
};

ContactList.propType = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
