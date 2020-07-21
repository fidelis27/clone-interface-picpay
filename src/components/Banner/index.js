import React from 'react';

import { Container, Details, Image, Title, Description } from './styles';
import img13 from '../../assets/images/13.png';

const Banner = () => {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>
        <Description>
          Matenha suas parcerias em dia, use o Picpay para fazer suas cobranças
        </Description>
      </Details>
      <Image source={img13} />
    </Container>
  );
};

export default Banner;
