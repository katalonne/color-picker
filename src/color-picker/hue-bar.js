import { useEffect, useRef } from 'react'
import { calculateHueChange } from './utils'

export const HueBar = (props) => {
  const container = useRef(null);
  useEffect(() => {
    return () => unbindEventListeners()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleMouseDown = (e) => {
    handleChange(e)
    window.addEventListener('mousemove', handleChange)
    window.addEventListener('mouseup', handleMouseUp)
  }
  const handleChange = (e) => {
    const change = calculateHueChange(e, 'vertical', props.hsl, container.current)
    change && typeof props.onChange === 'function' && props.onChange(change, e)
  }

  const handleMouseUp = () => {
    unbindEventListeners()
  }

  const unbindEventListeners = () => {
    window.removeEventListener('mousemove', handleChange)
    window.removeEventListener('mouseup', handleMouseUp)
  }

  return (
    <div style={{
      position: 'relative',
      height: props.height,
      width: props.width,
    }}>
      <div style={{position: 'absolute', inset: '0px'}}>
        <div 
          ref={container}
          onMouseDown={ handleMouseDown }
          onTouchMove={ handleChange }
          onTouchStart={ handleChange }
          style={{
            padding: '0px 2px',
            position: 'relative',
            height: '100%',
            background: 'linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)'
          }}
        >
        </div>
      </div>
    </div>
  );
}