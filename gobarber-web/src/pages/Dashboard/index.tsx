import React, { useState } from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

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

      <Content>
        <Schedule>
          <h1>Horarios agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>
          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars1.githubusercontent.com/u/8046780?s=460&u=2626d6f50efe9f6b8c9e4e77728fef5be7af0ced&v=4"
                alt=""
              />

              <strong>Luan Messias</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Morning</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars1.githubusercontent.com/u/8046780?s=460&u=2626d6f50efe9f6b8c9e4e77728fef5be7af0ced&v=4"
                  alt=""
                />

                <strong>Luan Messias</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Evening</strong>
          </Section>
        </Schedule>
        <Calendar>...</Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
