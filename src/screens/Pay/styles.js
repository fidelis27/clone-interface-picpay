import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
  background: #f2f2f2;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled(LinearGradient)`
  height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Imagem = styled.Image`
  width: 120px;
  height: 120px;
`;

export const UseBalance = styled.View`
  background: #f2f2f2;
  height: 60px;
  flex-direction: row;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
  color: #000;
  font-size: 25px;
  font-weight: bold;
`;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #000;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Card = styled.View`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const CardBody = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 20px;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #555555;
  margin-left: 20px;
`;

export const CardInfo = styled.Text`
  font-size: 14px;
  color: #555555;
  margin-top: 15px;
`;

export const Divider = styled.View`
  width: 2px;
  height: 13px;
  background: #10c86e;
  margin: 0 10px;
`;
export const Number = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
