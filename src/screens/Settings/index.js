import React from 'react';
import { SectionList } from 'react-native';

import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

import {
  Wrapper,
  Container,
  Header,
  ProfileContainer,
  Profile,
  ProfileUserName,
  ProfileName,
  LinkProfileButton,
  LinkProfileLabel,
  MyAccount,
  Settings,
  Itens,
  SectionHeader,
  BalanceContainer,
  Balance,
  Separator,
} from './styles';

export default function Setting() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <BalanceContainer>
            <Balance>Ajustes</Balance>
          </BalanceContainer>

          <AntDesign name="setting" size={30} color="#10C86E" />
        </Header>
        <ProfileContainer>
          <Profile>
            <FontAwesome5 name="user-circle" size={120} color="#8EC29B" />
            <ProfileUserName>@thiagofidelis</ProfileUserName>
            <ProfileName>Thiago Fidelis</ProfileName>
            <LinkProfileButton>
              <LinkProfileLabel>Ver meu perfil </LinkProfileLabel>
              <AntDesign name="arrowright" size={12} color="#10C86E" />
            </LinkProfileButton>
          </Profile>
          <MyAccount>Minha conta</MyAccount>
        </ProfileContainer>

        <Settings>
          <SectionList
            sections={[
              {
                title: 'Para o meu negócio',
                data: [
                  'PicPay PRO',
                  'Para estabelecimentos',
                  'Venda por assiantura',
                ],
              },
              {
                title: 'Configurações',
                data: [
                  'Usar digital para pagar',
                  'Alterar senha',
                  'Privacidade',
                  'Notificações',
                  'Contas Vinculadas',
                ],
              },
              {
                title: 'Geral',
                data: [
                  'Precisa de ajuda ?',
                  'Sobre o PicPay',
                  'Desativar a minha conta',
                ],
              },
              {
                title: 'Sair',
                data: [
                  'Sair da conta @diegoferreira',
                  'Sair de todas as contas',
                ],
              },
            ]}
            renderItem={({ item }) => <Itens>{item}</Itens>}
            renderSectionHeader={({ section }) => (
              <SectionHeader>{section.title}</SectionHeader>
            )}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={() => <Separator />}
          />
        </Settings>
      </Container>
    </Wrapper>
  );
}
