import { useEffect, useState } from 'react';
import { Section } from 'components/Section/Section';
import Form from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../SearchForm/SearchForm';
import { Container, Text } from './App.styled';
import { useSelector } from 'react-redux';
import { selectContact } from 'redux/selectors';

export default function App() {
  const contacts = useSelector(selectContact);

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
