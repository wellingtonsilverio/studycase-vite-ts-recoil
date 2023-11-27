import Button from '../../components/Button'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { countState } from '../../store/count'

import './App.css'

function App() {
  const count = useRecoilValue(countState);
  const setCount = useSetRecoilState(countState);
  
  const handleAddCount = () => {
    setCount(_count => _count + 1);
  }

  return (
    <>
      <h1>Vite + React + Recoil</h1>
      <div className="card">
        <Button onClick={handleAddCount}>
          count is {count}
        </Button>
      </div>
    </>
  )
}

export default App
