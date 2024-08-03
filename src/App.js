import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main>
        {/* Main content goes here */}
      </Main>
      <Footer />
    </>
  );
}

export default App;
