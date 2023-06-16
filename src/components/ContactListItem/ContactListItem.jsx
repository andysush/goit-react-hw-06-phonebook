import PropTypes from 'prop-types';
import { Item, DeleteBtn } from './ConatactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContact, selectFilter } from 'redux/selectors';
import { delContact } from 'redux/contactSlice';

export const ContactItem = () => {
  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const onClickHandler = id => dispatch(delContact(id));
  return (
    <>
      {data.map(({ id, name, number }) => (
        <Item key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <DeleteBtn
            type="button"
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </>
  );
};

ContactItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
