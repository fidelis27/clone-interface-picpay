import React from 'react';
import { EvilIcons, Ionicons } from '@expo/vector-icons';

import {
  Wrapper,
  Container,
  Header,
  HeaderContainer,
  Imagem,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  Divider,
  Number,
} from './styles';

import img6 from '../../assets/images/06.png';

export default function Pay() {
  return (
    <Wrapper>
      <Container>
        <Header colors={['#006857', '#3A7452']}>
          <HeaderContainer>
            <Imagem source={img6} />
          </HeaderContainer>
        </Header>

        <UseBalance>
          <UseBalanceTitle>Pagar Conta</UseBalanceTitle>
        </UseBalance>

        <PaymentMethods>
          <PaymentMethodsTitle>
            COMO DESEJA PAGAR SUA CONTA?
          </PaymentMethodsTitle>

          <Card>
            <CardBody>
              <EvilIcons name="camera" size={30} color="black" />
              <CardDetails>
                <CardTitle>Use leitor de código de barras</CardTitle>
              </CardDetails>
              <Ionicons name="ios-arrow-forward" size={24} color="#10c86e" />
            </CardBody>

            <CardBody>
              <Number>
                123 <Divider />
              </Number>
              <CardDetails>
                <CardTitle>Digite o cógigo de barras manualmente</CardTitle>
              </CardDetails>
              <Ionicons name="ios-arrow-forward" size={24} color="#10c86e" />
            </CardBody>
          </Card>
        </PaymentMethods>
      </Container>
    </Wrapper>
  );
}
