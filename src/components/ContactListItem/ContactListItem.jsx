import PropTypes from 'prop-types';
import { Item, DeleteBtn } from './ConatactListItem.styled';

export const ContactItem = ({ data, onDeleteContact }) => {
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
