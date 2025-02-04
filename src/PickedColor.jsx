const PickedColor = ({selectedColor}) => {
  const body = document.querySelector('body');
  body.style["background-color"] = selectedColor.toLowerCase();
  if(selectedColor){
  return <p>{selectedColor}</p>;
  }
  return <p></p>
}

export default PickedColor