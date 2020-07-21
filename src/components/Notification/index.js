import React from 'react';
import {
  MaterialCommunityIcons,
  AntDesign,
  SimpleLineIcons,
  Feather,
} from '@expo/vector-icons';

import {
  Container,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  PaymentDescription,
  CardFooter,
  Details,
  Value,
  PaymentValue,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
  Wrapper,
} from './styles';

import img1 from '../../assets/images/01.png';
import img2 from '../../assets/images/02.png';
import img6 from '../../assets/images/06.png';
import img11 from '../../assets/images/11.png';

import avatar from '../../assets/images/avatar.png';

export default function Notification() {
  return (
    <Wrapper>
      <Container>
        <Card>
          <CardHeader>
            <Avatar source={avatar} />
            <Description>
              <Bold>Você</Bold> pagou a <Bold>@ThiagoFidelis</Bold>
            </Description>
          </CardHeader>

          <CardBody>
            <PaymentDescription>
              Compra do curso de JavaScript na Udemy
            </PaymentDescription>
          </CardBody>

          <CardFooter>
            <Details>
              <PaymentValue>R$ 22,90</PaymentValue>

              <Divider />

              <SimpleLineIcons name="people" color="#FFF" size={14} />
              <Date>Há 15 minutos atás</Date>
            </Details>

            <Actions>
              <Option>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={14}
                  color="#FFF"
                />
                <OptionLabel> 1 </OptionLabel>
              </Option>

              <Option>
                <AntDesign name="heart" size={14} color="#FFF" />
                <OptionLabel> 1 </OptionLabel>
              </Option>
            </Actions>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Avatar source={img6} />
            <Description>
              <Bold>Você</Bold> pagou um <Bold>boleto</Bold>
            </Description>
          </CardHeader>

          <CardBody>
            <PaymentDescription>
              Pagamento de Bole banco ITAÚ
            </PaymentDescription>
          </CardBody>

          <CardFooter>
            <Details>
              <PaymentValue>R$ 600,00</PaymentValue>

              <Divider />

              <Feather name="lock" color="#FFF" size={14} />
              <Date>Há 55 mitutos atás</Date>
            </Details>

            <Actions>
              <Option>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={14}
                  color="#FFF"
                />
                <OptionLabel> 1 </OptionLabel>
              </Option>

              <Option>
                <AntDesign name="heart" size={14} color="#FFF" />
                <OptionLabel> 1 </OptionLabel>
              </Option>
            </Actions>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Avatar source={img1} />
            <Description>
              <Bold>Você</Bold> fez uma <Bold>recarga de celular</Bold>
            </Description>
          </CardHeader>

          <CardBody>
            <PaymentDescription>Recarca Claro</PaymentDescription>
          </CardBody>

          <CardFooter>
            <Details>
              <PaymentValue>R$ 18,00</PaymentValue>

              <Divider />

              <Feather name="lock" color="#FFF" size={14} />
              <Date>Há 10 dia atás</Date>
            </Details>

            <Actions>
              <Option>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={14}
                  color="#FFF"
                />
                <OptionLabel> 0 </OptionLabel>
              </Option>

              <Option>
                <AntDesign name="hearto" size={14} color="#FFF" />
                <OptionLabel> 0 </OptionLabel>
              </Option>
            </Actions>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Avatar source={avatar} />
            <Description>
              <Bold>@CaroolJamarco</Bold> pagou a <Bold>você</Bold>
            </Description>
          </CardHeader>

          <CardBody>
            <PaymentDescription>
              Valor referente ao almoço de quinta-feira
            </PaymentDescription>
          </CardBody>

          <CardFooter>
            <Details>
              <Value>R$ 45,00</Value>

              <Divider />

              <SimpleLineIcons name="people" color="#FFF" size={14} />
              <Date>Há 2 dia atás</Date>
            </Details>

            <Actions>
              <Option>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={14}
                  color="#FFF"
                />
                <OptionLabel> 1 </OptionLabel>
              </Option>

              <Option>
                <AntDesign name="heart" size={14} color="#FFF" />
                <OptionLabel> 2 </OptionLabel>
              </Option>
            </Actions>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Avatar source={img2} />
            <Description>
              <Bold>Você</Bold> pagou a <Bold>Uber</Bold>
            </Description>
          </CardHeader>

          <CardBody>
            <PaymentDescription>
              Corrida do Trabalho para Casa
            </PaymentDescription>
          </CardBody>

          <CardFooter>
            <Details>
              <PaymentValue>R$ 50,00</PaymentValue>

              <Divider />

              <SimpleLineIcons name="people" color="#FFF" size={14} />
              <Date>Há 3 dia atás</Date>
            </Details>

            <Actions>
              <Option>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={14}
                  color="#FFF"
                />
                <OptionLabel> 3 </OptionLabel>
              </Option>

              <Option>
                <AntDesign name="heart" size={14} color="#FFF" />
                <OptionLabel> 1 </OptionLabel>
              </Option>
            </Actions>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Avatar source={img11} />
            <Description>
              <Bold>Você</Bold> pagou uma <Bold>conta</Bold>
            </Description>
          </CardHeader>

          <CardBody>
            <PaymentDescription>Pagamento da conta de Luz</PaymentDescription>
          </CardBody>

          <CardFooter>
            <Details>
              <PaymentValue>R$ 125,00</PaymentValue>

              <Divider />

              <SimpleLineIcons name="people" color="#FFF" size={14} />
              <Date>Há 5 dia atás</Date>
            </Details>

            <Actions>
              <Option>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={14}
                  color="#FFF"
                />
                <OptionLabel> 1 </OptionLabel>
              </Option>

              <Option>
                <AntDesign name="heart" size={14} color="#FFF" />
                <OptionLabel> 1 </OptionLabel>
              </Option>
            </Actions>
          </CardFooter>
        </Card>
      </Container>
    </Wrapper>
  );
}
