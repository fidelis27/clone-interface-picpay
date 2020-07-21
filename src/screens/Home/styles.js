import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background-color: #000;
  flex: 1;
`;

export const Header = styled.View`
  height: 50px;
  padding: 5px 16px 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BalanceContainer = styled.View``;
export const Container = styled.ScrollView``;

export const BalanceTitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  text-align: center;
`;

export const Balance = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;
