import { useState } from 'react'
import ColorButton from './ColorButton.jsx'
import PickedColor from './PickedColor.jsx'


const App = () => {
  const [selectedColor, colorSelect] = useState('');
  
  
  return (
    <>
      
      <PickedColor selectedColor={selectedColor}/>
      <h1>Color Picker</h1>
      <ColorButton color="Blue" colorSelect={colorSelect}/>
      
      <ColorButton color="Yellow" colorSelect={colorSelect}/>

      <ColorButton color="Green" colorSelect={colorSelect}/>
      
    </>
  )
}

export default App
