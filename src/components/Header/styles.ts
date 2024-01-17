import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 90rem;
  height: 7.375rem;
  margin: 0 auto;
  padding: 0 1.5625rem 0 1.25rem;
  background-color: ${({ theme }) => theme.colors.blueMedium};

  @media (max-width: 436px) {
    height: 3.75rem;
    padding: 0 1.25rem;
  }

  @media (max-width: 280px) {
    height: 3.75rem;
  }
`
export const Message = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Yanone Kaffeesatz';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  margin-right: 5.625rem;
  color: #fff;

  @media (max-width: 1245px) {
    font-size: 1rem;
    margin-right: 50px;
  }

  @media (max-width: 733px) {
    font-size: 0.75rem;
    margin-right: 20px;
  }

  @media (max-width: 655px) {
    font-size: 0.625rem;
  }

  @media (max-width: 412px) {
    font-size: 0.375rem;
  }
  @media (max-width: 315px) {
    font-size: 0.25rem;
  }
`
export const Logo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9.0625rem;
  height: 4.125rem;

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (max-width: 585px) {
    max-width: 80%;
    max-height: 6.25rem;
  }

  @media (max-width: 489px) {
    max-width: 80%;
    max-height: 4.375rem;
  }

  @media (max-width: 440px) {
    max-width: 80%;
    max-height: 20px;
  }
`
export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 24.25rem;

  @media (max-width: 1131px) {
    padding-left: 100px;
  }

  @media (max-width: 725px) {
    padding-left: 25px;
  }

  @media (max-width: 400px) {
    padding-left: 25px;
  }
`
export const HideNumber = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15.0625rem;
  height: 2.1875rem;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.625rem;
  border: none;
  font-size: 1rem;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  margin-right: 4.125rem;

  @media (max-width: 951px) {
    width: 80%;
    font-size: 1rem;
    margin-left: 20px;
  }

  @media (max-width: 733px) {
    width: 80%;
    font-size: 0.75rem;
  }

  @media (max-width: 655px) {
    width: 80%;
    font-size: 0.625rem;
  }

  @media (max-width: 412px) {
    width: 80%;
    font-size: 0.375rem;
  }
  @media (max-width: 315px) {
    width: 80%;
    font-size: 0.25rem;
  }
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Photo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.6875rem;
  height: 1.6081rem;

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (max-width: 585px) {
    max-width: 80%;
    max-height: 60px;
  }

  @media (max-width: 489px) {
    max-width: 80%;
    max-height: 20px;
  }

  @media (max-width: 440px) {
    max-width: 80%;
    max-height: 20px;
  }
`
export const Flags = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 12px;
  gap: 12px;
`
export const Messages = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Yanone Kaffeesatz';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 12px;
  margin-bottom: 27px;
  margin-top: 41px;
  color: #fff;

  @media (max-width: 951px) {
    font-size: 1rem;
  }

  @media (max-width: 733px) {
    font-size: 0.75rem;
    margin-bottom: 10px;
    margin-top: 11px;
  }

  @media (max-width: 655px) {
    font-size: 0.625rem;
  }

  @media (max-width: 415px) {
    font-size: 4px;
  }
  @media (max-width: 315px) {
    font-size: 0.25rem;
  }
`
export const PhoneNumber = styled.span`
  display: ${(props) => (props.hidden ? 'none' : 'block')};
  margin-right: 60px;

  @media (max-width: 951px) {
    font-size: 1rem;
  }

  @media (max-width: 733px) {
    font-size: 0.75rem;
    margin-bottom: 10px;
    margin-top: 5px;
  }

  @media (max-width: 655px) {
    font-size: 5px;
  }

  @media (max-width: 415px) {
    font-size: 4px;
  }
  @media (max-width: 315px) {
    font-size: 0.25rem;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Yanone Kaffeesatz';
`
