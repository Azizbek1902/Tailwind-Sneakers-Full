import React from 'react';
import Container from '../../components/Home/Container';
import Content from '../../components/Home/Content';
import Header from '../../components/Home/Header';
import Middle from '../../components/Home/Middle';

function Home() {
  return (
    <div>
        <Header />
        <Container />
        <Content />
        <Middle />
    </div>
  )
}

export default Home