import { useEffect, useState } from 'react';
import { Section } from 'components/Section/Section';
import Form from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../SearchForm/SearchForm';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contact')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    const contact = {
      id: nanoid(6),
      name,
      number,
    };
    const isExistName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const isExistNumber = contacts.find(contact => contact.number === number);

    if (isExistName) {
      return alert(`${name} is already in contacts`);
    }
    if (isExistNumber) {
      return alert(`${number} is already in contacts`);
    }

    setContacts(prevContact => [contact, ...prevContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevContact =>
      prevContact.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const lowerCaseFilter = filter.toLowerCase();

  const findContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(lowerCaseFilter)
  );

  return (
    <Container>
      <Section title="Phone Book">
        <Form onSubmit={formSubmitHandler}></Form>
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={findContacts} onDeleteContact={deleteContact} />
      </Section>
    </Container>
  );
}
