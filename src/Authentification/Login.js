import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Title, Body
} from 'native-base';
import {loginThenNavigate} from '../actions';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import I18n from '../Utils/i18n';

export default function Login(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
    showPassword: false,
  });
  const dispatch = useDispatch();

  const login = () => {
    console.log('state is ', state);
    dispatch(
      loginThenNavigate(
        {
          email: state.email,
          password: state.password,
        },
        props.navigation,
      ),
    );
  };

  return (
    <Container >
      <Header>
        <Body>
          <Title>Login</Title>
        </Body>
      </Header>
      <Content >
        <Form style={{display:'flex',alignItems:'center'}}>
          <Item floatingLabel>
            <Label>{I18n.t('email')}</Label>
            <Input
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={email => setState({...state, email})}
            />
          </Item>
          <Item floatingLabel last>
            <Label>{I18n.t('password')}</Label>
            <Input
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={password => setState({...state, password})}
            />
          </Item>
          <Button  style={{width:200, margin:30}} onPress={login}>
          <Text style={{textAlign:'center'}}>Login</Text>
        </Button>
        </Form>

      </Content>
    </Container>
  );
}
