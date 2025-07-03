import Person from "./components/Person.jsx"
import Product from "./components/Product.jsx"
// import Weather from "./components/Weather.jsx"
// import Greeting from "./components/Greeting"
// import UserStatus from "./components/UserStatus"

import Button from "./components/Button"

const App = ()=>{
  return (
  <div>
    <Person name="Simran" age={22} />
    <Product name="Car" price={450} />
    {/* <Weather temperature={28}/> */}
    {/* <UserStatus loggedIn={true} isAdmin={false}/> */}
    {/* <Greeting timeOfDay="afternoon"/> */}
    <Button />
  </div>
  )
}

export default App