
import React from 'react'

import create from 'zustand'

const useStore = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}))


function App() {
  return (
    <div className="App">
    sdfsdf

    <BearCounter/>
    <Controls/>
    
    </div>
  );
}


const BearCounter = () => {
  const bears = useStore(state => state.bears)
  return (
     <h1>{bears} around here ...</h1>
  )
}


const Controls = () => {
  
  const increasePopulation = useStore(state => state.increasePopulation)
  return (
    <button onClick={increasePopulation}>one up</button>
  )
}



export default App;
