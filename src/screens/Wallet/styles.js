import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
  background-color: #000;
  flex: 1;
`;
export const Header = styled(LinearGradient)`
  height: 300px;
`;
export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: #fff;
  font-size: 38px;
  font-weight: 200;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 16px;
`;

export const Info = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
`;
export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 150px;
  height: 45px;
  border-radius: 25px;
  margin: 0 10px;
`;

export const ActionLabel = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 12px;
`;

export const UseBalance = styled.View`
  background: #1c1c1e;
  height: 60px;
  flex-direction: row;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #8e8e93;
  text-transform: uppercase;
`;

export const Card = styled.View`
  background: #1e232a;
  border-radius: 8px;
  padding: 15px;
  margin-top: 25px;
`;
export const CardBody = styled.View`
  flex-direction: row;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 22px;
`;

export const CardTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
export const CardInfo = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`;

export const CreditCard = styled.Image`
  width: 60px;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 15px;
  align-items: center;
`;
export const AddLabel = styled.Text`
  margin-left: 15px;
  font-weight: bold;
  font-size: 18px;
  color: #0db060;
`;
export const UseTicketContainer = styled.View`
  align-items: center;
`;

export const UseTicketButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 15px;
  align-items: center;
`;

export const UseTicketLabel = styled.Text`
  margin-left: 15px;
  font-weight: bold;
  font-size: 16px;
  color: #0db060;
  text-decoration: underline;
`;
