import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField } from 'src/modules/contact';

const useContact = () => {
  const { name, email, subject, message } = useSelector(({ contact }) => ({
    name: contact.name,
    email: contact.email,
    subject: contact.subject,
    message: contact.message,
  }));
  const dispatch = useDispatch();
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
  return { onChangeField, name, email, subject, message };
};

export default useContact;
