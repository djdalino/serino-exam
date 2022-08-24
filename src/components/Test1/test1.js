
import React, {useState, useEffect, useRef} from 'react'

const MyComponent = ({children, headerText}) =>{
  const [clicks, setClicks] = useState(0)
  const myRef = useRef();

  useEffect(() =>{
    myRef.current.addEventListener('click', handleClick);
    return () => myRef.current.removeEventListener('click', handleClick);
  }, [clicks])


  const handleClick = () =>{
    setClicks(clicks + 1)
  }
  return (
    <div className="my-component" ref={myRef}>
      <h2>My Component ({clicks} {clicks < 1 ? 'click' : 'clicks'})</h2>
      <h3>{headerText}</h3>
      {children}
    </div>
  )
}

export default MyComponent



