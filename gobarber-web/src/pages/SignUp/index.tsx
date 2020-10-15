import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import getValidationerrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, AnimationContainer, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: []) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatorio'),
        email: Yup.string()
          .required('E-mail obrigatorio')
          .email('digite um email valido'),
        password: Yup.string().min(6, 'Minimo seis digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationerrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <AnimationContainer>
        <Content>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faca o seu cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-Mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Cadastrar</Button>
            <a href="forgot">Esqueci minha senha</a>
          </Form>

          <Link to="/">
            <FiArrowLeft /> Voltar para logon
          </Link>
        </Content>
      </AnimationContainer>
    </Container>
  );
};

export default SignUp;
