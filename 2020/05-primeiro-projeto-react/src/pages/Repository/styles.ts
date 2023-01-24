import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: all 0.2s;

    svg {
      margin-right: 4px;
      transition: all 0.2s;
    }

    &:hover {
      color: ${shade(0.3, '#a8a8b3')};
      svg {
        margin-right: 8px;
      }
    }
  }
`;

export const RepoInfo = styled.div`
  margin-top: 80px;
`;

export const RepoInfoHeader = styled.header`
  display: flex;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  div {
    margin-left: 25px;

    strong {
      font-size: 36px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #737380;
      margin-top: 4px;
    }
  }
`;

export const RepoInfoText = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 40px;

  li {
    & + li {
      margin-left: 80px;
    }

    strong {
      display: block;
      font-size: 36px;

      color: #3d3d4d;
    }

    span {
      display: block;
      margin-top: 4px;
      color: #6c6c80;
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;
  a {
    background: #fff;
    display: flex;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    align-items: center;
    transition: all 0.2s;

    &:hover {
      background: ${shade(0.02, '#fff')};
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 16px;
      flex: 1;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #c9c9d4;
    }
  }
`;
