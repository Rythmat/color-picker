import ColorButton from './ColorButton.jsx'
import PickedColor from './PickedColor'

const App = () => {
  return (
    <>
      <h1>Color Picker</h1>
      <ColorButton color="Blue"/>
      
      <ColorButton color="Yellow"/>

      <ColorButton color="Green"/>
    </>
  )
}

export default App
