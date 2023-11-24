import { useState } from 'react'

import * as S from './styles'

export function Header() {
  const [showNumber, setShowNumber] = useState(false)

  const handleMouseEnter = () => {
    setShowNumber(true)
  }

  const handleMouseLeave = () => {
    setShowNumber(false)
  }

  return (
    <>
      <S.Container>
        <div>
          <S.Logo src="Autobras.png" alt="logo" />
        </div>
        <S.Info>
          <S.Message>About AutoBras</S.Message>
          <S.Message>Contact</S.Message>
          <S.Content>
            <S.HideNumber
              hidden={showNumber}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Get quote + Schedule
            </S.HideNumber>
            <S.PhoneNumber hidden={!showNumber}>
              Ramon: +1 210 994-4221
            </S.PhoneNumber>
          </S.Content>
          <S.Box>
            <S.Messages>WE SPEAK</S.Messages>
            <S.Flags>
              <S.Photo src="usa.png" alt="USA" />
              <S.Photo src="mexico.png" alt="Mex" />
            </S.Flags>
          </S.Box>
        </S.Info>
      </S.Container>
    </>
  )
}
