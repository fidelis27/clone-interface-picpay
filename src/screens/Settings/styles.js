import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ProfileContainer = styled.View`
  background: #f2f2f2;
`;

export const Profile = styled.View`
  height: 300px;
  justify-content: center;
  align-items: center;
`;
export const Avatar = styled.Image``;

export const ProfileUserName = styled.Text`
  color: #555555;
  font-size: 20px;
  font-weight: bold;
`;

export const ProfileName = styled.Text`
  font-size: 16px;
  color: #aaaaaa;
`;

export const LinkProfileButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const LinkProfileLabel = styled.Text`
  color: #10c86e;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
`;
export const MyAccount = styled.Text`
  color: #a9d1b3;
  padding: 15px;
  font-weight: bold;
  font-size: 16px;
`;

export const Settings = styled.View`
  flex: 1;
  padding-top: 20px;
`;

export const Itens = styled.Text`
  padding: 10px;
  font-size: 19px;
  height: 55px;
  color: #fff;
`;
export const SectionHeader = styled.Text`
  color: #10c86e;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 2px;
  font-size: 22px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View``;

export const BalanceTitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  text-align: center;
`;

export const Balance = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const Separator = styled.View`
  flex: 1;
  height: 1px;
  background-color: #1c1c1c;
`;
