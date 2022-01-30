import { useState } from 'react';
import { HueBar } from './hue-bar'
import { Saturation } from './saturation'
import { ColorBox } from './color-box'
import { ColorText } from './color-text'
import { allColors } from './utils'
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
`

export const ColorPicker = ({
  width = 400,
  height = 200,
  initialColor
}) => {
  const [state, setState] = useState({
    colors : allColors(initialColor),
    prevState: void 0
  })

  const handleChange = (data, event) => {
    const colors = allColors(data, data.h || state.oldHue, state)
    setState({colors})
  }
  return (
    <div>
      <Container>
        <ColorBox width={`${height-20}px`} height={`${height}px`} background={state.colors.hex}/>
        <Saturation width={`${width}px`} height={`${height}px`} colors={state.colors} onChange={handleChange} />
        <HueBar width='19px' height={`${height}px`} {...state.colors} onChange={handleChange} />
      </Container>
      <ColorText hex={state.colors.hex} />
    </div>
  )
}