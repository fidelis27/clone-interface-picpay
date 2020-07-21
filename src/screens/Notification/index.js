import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  Balance,
} from './styles';

import Notification from '../../components/Notification';

const Notifications = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Ionicons name="ios-menu" size={28} color="#10C86E" />

          <BalanceContainer>
            <Balance>Notificações</Balance>
          </BalanceContainer>

          <Ionicons
            name="ios-notifications-outline"
            size={28}
            color="#10C86E"
          />
        </Header>

        <Notification />
      </Container>
    </Wrapper>
  );
};

export default Notifications;
