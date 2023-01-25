import Phonebook from "./Phonebook/Phonebook";

export const App = () => {
  return (
    <div
    style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      color: '#010101',
    }}>
      <Phonebook/>
    </div>
  );
};
