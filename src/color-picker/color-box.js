
export const ColorBox = ({
  width = '200px',
  height = '200px',
  background,
  style
}) => {
  return (
    <div style={{width, height, background, ...style}}></div>
  )
}