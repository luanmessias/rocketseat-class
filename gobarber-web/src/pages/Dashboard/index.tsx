import React from 'react';
import { FiPower } from 'react-icons/fi';
import { Container, Header, HeaderContent, Profile } from './styles';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img
              src="https://avatars1.githubusercontent.com/u/8046780?s=460&u=2626d6f50efe9f6b8c9e4e77728fef5be7af0ced&v=4"
              alt="Luan Messias"
            />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
