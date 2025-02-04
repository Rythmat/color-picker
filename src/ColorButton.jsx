const ColorButton = (props) => {
  const color = props.color
  return <button onClick={() =>{
    props.colorSelect(color);
  }  }>{color}</button>
}

export default ColorButton;