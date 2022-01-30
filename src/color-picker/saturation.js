import { useEffect, useRef } from 'react'
import { calculateSaturationChange } from './utils'

export const Saturation = ({ colors, onChange, width = '200px', height = '200px' }) => {
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
    const change = calculateSaturationChange(e, colors.hsl, container.current)
    console.log(`change`, change)
    change && typeof onChange === 'function' && onChange(change, e)
  }

  const handleMouseUp = () => {
    unbindEventListeners()
  }

  const unbindEventListeners = () => {
    window.removeEventListener('mousemove', handleChange)
    window.removeEventListener('mouseup', handleMouseUp)
  }

  const bgHsl = `hsl(${ colors.hsl.h },100%, 50%)`
  return (
    <div style={{position: 'relative', width, height, marginRight: '10px', overflow: 'hidden'}}>
      <div 
        ref={container}
        onMouseDown={ handleMouseDown }
        onTouchMove={ handleChange }
        onTouchStart={ handleChange }
        style={{position: 'absolute', inset: '0px', background: bgHsl}}
      >
        <style>{`
          .saturation-white {
            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));
            background: linear-gradient(to right, #fff, rgba(255,255,255,0));
          }
          .saturation-black {
            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));
            background: linear-gradient(to top, #000, rgba(0,0,0,0));
          }
        `}</style>
        <div className='saturation-white' style={{position: 'absolute', inset: '0px'}}>
          <div className='saturation-black' style={{position: 'absolute', inset: '0px'}}>
            <div style={{
              position: 'absolute',
              top: `${ -(colors.hsv.v * 100) + 100 }%`,
              left: `${ colors.hsv.s * 100 }%`,
              cursor: 'default',
            }} className='pointer-container'>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '10px',
                boxShadow: 'inset 0 0 0 2px #fff',
                transform: 'translate(-10px, -10px)',
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}