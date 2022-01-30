import styled from '@emotion/styled';

const ColorTextContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 18px;
`

const HexColor = styled.div`
  border: 3px solid #000;
  padding: 5px;
  margin-left: 5px;
  letter-spacing: 2px;
`

export const ColorText = ({hex}) => {
  return (
    <ColorTextContainer>
      Color (HEX)
      <HexColor>
        {hex}
      </HexColor>
    </ColorTextContainer>
  )
}