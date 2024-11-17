import "./App.css";
import {useEffect, useState} from "react";

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const [checked, setChecked] = useState(false)
  const nextColor = buttonColor === 'red' ? 'blue' : 'red'
  const buttonState = !checked ? 'disable' : 'able'
  const className = checked ? buttonColor : 'gray'
  useEffect(() => {
    if (!checked) setButtonColor('gray')
    else setButtonColor(nextColor)
  }, [checked])
  return <div>
    <button onClick={() => setButtonColor(nextColor)} className={className} disabled={!checked}>Change to {nextColor}</button>
    <br />
    <input type="checkbox" id='disable-button-checkbox' onChange={({currentTarget: {checked}}) => setChecked(checked)} defaultChecked={checked}/>
    <label htmlFor="disable-button-checkbox">{`${buttonState} button`}</label>
  </div>
}

export default App;
