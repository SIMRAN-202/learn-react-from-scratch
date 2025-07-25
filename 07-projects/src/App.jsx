
import Counter from './components/Counter'
import Todo from './components/Todo'
import Meals from './components/Meals'
import Calculator from './components/Calculator'
import ToggleBgColor from './components/ToggleBgColor'
import HiddenSearchbar from './components/HiddenSearchbar'

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Counter Project</h1>
      <Counter />      

      <h1 className="text-3xl font-bold text-center my-8">ToDo Project</h1>

      <Todo />

      <h1 className="text-3xl font-bold text-center my-8">Meals API Fetch Project</h1>

      <Meals />

      <h1 className="text-3xl font-bold text-center my-8">Calculator</h1>

      <Calculator />

      <h1 className="text-3xl font-bold text-center my-8">Toggle Background Color</h1>

      <ToggleBgColor />

      <h1 className="text-3xl font-bold text-center my-8">Hidden Search bar</h1>

      <HiddenSearchbar />

    </div>
  )
}

export default App