import { MdFacebook } from 'react-icons/md'
import styled from 'styled-components'

//import { theme } from 'styles/theme'

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 90rem;
  height: 40.625rem;
  margin: 0 auto;

  @media (max-width: 836px) {
    height: auto;
  }
`

export const VideoContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const Video = styled.video`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  max-width: 90rem;
  height: 40.625rem;
  margin: 0 auto;
  background-size: cover;

  @media (max-width: 748px) {
    height: auto;
  }
`
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 90rem;
  height: 155px;
  margin: 0 auto;
  //padding: 0 1.5625rem 0 1.25rem;
  background-color: ${({ theme }) => theme.colors.yellow};

  @media (max-width: 436px) {
    height: 3.75rem;
    /* padding: 0 1.25rem; */
  }

  @media (max-width: 280px) {
    height: 3.75rem;
  }
`
export const Text = styled.p`
  font-family: 'Istok Web', sans-serif;
  font-weight: 700;
  font-size: 54px;

  @media (max-width: 874px) {
    font-size: 30px;
  }

  @media (max-width: 503px) {
    font-size: 20px;
  }

  @media (max-width: 343px) {
    font-size: 12px;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  height: 593px;
  margin: 0 auto;
  padding: 0 1.5625rem 0 1.25rem;
  box-sizing: border-box;

  @media (max-width: 959px) {
    height: auto;
    padding: 0 1.25rem;
    flex-direction: column;
  }
`
export const Diagram = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 712px;
  height: 593px;
  box-sizing: border-box;

  @media (max-width: 1149px) {
    max-width: 90%; /* Ajusta a largura máxima para 90% em telas menores que 768px (tablets, por exemplo) */
    height: 90%;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 0; /* Remove a margem à esquerda em telas menores que 768px */
  }
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .column {
    width: 48%; /* Cada coluna ocupa 48% da largura para criar espaço entre elas */
    padding: 0 10px; /* Adicione espaçamento interno se desejar */
    box-sizing: border-box; /* Garante que o espaçamento interno não aumente a largura */
  }
`
export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.gray[300]};
`

export const Info = styled.p`
  font-family: 'Istok Web';
  font-size: 12px;
  word-wrap: break-word;

  /* Adicione media queries conforme necessário para ajustar o estilo em diferentes tamanhos de tela */
  @media (max-width: 768px) {
    font-size: 10px; /* Ajuste o tamanho da fonte para telas menores */
  }
`

export const Send = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 213px;
  height: 52px;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 10px;
  font-size: 34px;
  font-weight: 700;
  font-family: 'Istok Web', sans-serif;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    width: 150px;
    font-size: 28px;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 30px;
    font-size: 24px;
    margin-bottom: 5px;
  }

  @media (max-width: 480px) {
    width: 90px;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 5px;
  }
`
export const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 90rem;
  height: 40.625rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.yellow};

  @media (max-width: 768px) {
    /* Estilo para tablets (até 768 pixels de largura) */
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    /* Estilo para celulares (até 480 pixels de largura) */
    max-width: 100%;
    height: auto;
  }
`

export const TextReview = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Istok Web', sans-serif;
  font-size: 60px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 15px;

  @media (max-width: 874px) {
    font-size: 30px;
  }

  @media (max-width: 503px) {
    font-size: 20px;
  }

  @media (max-width: 343px) {
    font-size: 12px;
  }
`
export const Photos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;

  @media (max-width: 768px) {
    /* Estilos para tablets (largura máxima de 768 pixels) */
    flex-direction: column; /* Altera a direção para coluna */
  }

  @media (max-width: 480px) {
    /* Estilos para celulares (largura máxima de 480 pixels) */
    gap: 15px; /* Reduz o espaço entre os itens */
  }
`

export const Photo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 500px;
  border-radius: 10px;

  @media (max-width: 1295px) {
    /* Estilos para tablets (largura máxima de 768 pixels) */
    width: 300px; /* Reduz ainda mais a largura para celulares */
    height: 400px;
  }

  @media (max-width: 988px) {
    /* Estilos para celulares (largura máxima de 480 pixels) */
    width: 200px; /* Reduz ainda mais a largura para celulares */
    height: 300px; /* Reduz ainda mais a altura para celulares */
  }

  @media (max-width: 988px) {
    /* Estilos para celulares (largura máxima de 480 pixels) */
    width: 150px; /* Reduz ainda mais a largura para celulares */
    height: 200px; /* Reduz ainda mais a altura para celulares */
  }
`
export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Istok Web', sans-serif;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 10px;
  font-size: 30px;

  @media (max-width: 874px) {
    font-size: 20px;
  }

  @media (max-width: 503px) {
    font-size: 14px;
  }

  @media (max-width: 343px) {
    font-size: 12px;
  }
`

export const FinalContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 90rem;
  height: 274px;
  margin: 0 auto;

  @media (max-width: 836px) {
    height: auto;
  }

  @media (max-width: 757px) {
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding-left: 50%; */
  }
`

export const BoxImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 140px;

  @media (max-width: 757px) {
    display: none;
  }
`
export const FootLogo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 140px;
  margin: 78px 54px 56px 54px;

  @media (max-width: 1464px) {
    max-width: 80%;
    max-height: 70%;
  }

  @media (max-width: 1282px) {
    max-width: 60%;
    max-height: 40%;
  }

  @media (max-width: 757px) {
    display: none;
  }
`

export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  
  @media (max-width: 757px) {
 padding-left: 10px;
    
  }

`
export const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Istok Web';
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  padding-left: 159px;
  padding-top: 27px;
  padding-bottom: 61px;

  @media (min-width: 1464px) {
    gap: 20px;
    padding-top: 27px;
    padding-left: 200px;
    padding-bottom: 20px;
    padding-right: 0; /* Ajuste o padding conforme necessário */
    font-size: 20px;
  }

  /* @media (min-width: 1024px) {
    gap: 50px;
  } */
  

  @media (min-width: 280px) {
    gap: 20px;
    padding-top: 27px;
    padding-bottom: 5px;
    padding-right: 0; /* Ajuste o padding conforme necessário */
    font-size: 20px;
    padding-left: 10px;
  }
`

export const P_Contact = styled.p`
  font-family: 'Istok Web';
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  //margin-right: 303px;

  @media (max-width: 1464px) {
    //margin-right: 200px;
    font-size: 20px;
  }

  @media (max-width: 1270px) {
    //margin-right: 100px;
    font-size: 15px;
  }
  @media (max-width: 757px) {
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding-left: 50%; */
    font-size: 10px;
  }
`

export const ContentIcons = styled.div`
  display: flex;
  gap: 52px;
  // padding-left: 53px;

  @media (max-width: 1024px) {
    gap: 30px;
    // padding-left: 60px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    //padding-left: 40px;
  }
`

export const BoxA = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
`

export const SocialMedia = styled.a`
  display: flex;
  justify-content: baseline;
  align-items: center;
  text-decoration: none;
  gap: 20px;
  font-family: 'Istok Web';
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: 1458px) {
    gap: 20px;
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    gap: 30px;
    font-size: 1.875rem;
  }

  @media (max-width: 757px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-left: 10px;
  }

  @media (max-width: 464px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    /* padding-left: 50%; */
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Istok Web';
    font-size: 30px;
    font-style: normal;
    font-weight: 400;

    @media (max-width: 1210px) {
      font-size: 15px;
    }

    @media (max-width: 763px) {
      font-size: 10px;
    }
  }
`
export const FacebookIcon = styled(MdFacebook)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 33px; /* Tamanho inicial do ícone */
  color: #1877f2;

  @media (max-width: 1458px) {
    /* Ajuste para telas maiores que 768 pixels de largura */
    font-size: 23px;
  }
`
