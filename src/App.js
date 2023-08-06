
import React from 'react'

import create from 'zustand'

import Decrease from './zustand-document/Decrease';
import CartPage from './ai-zustand-template/CartPage';

const useStore = create(set => ({
  bears: 0,

  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  
  decreasePopulation: () => set(state => ({ bears: state.bears - 1 })),

  removeAllBears: () => set({ bears: 0 })
}))




function App() {
  return (
    <div className="App">
      <h1>zustand</h1>
      <h2>https://www.npmjs.com/package/zustand</h2>

      <div>
        <h2>zustand document</h2>
        <div>같은 file내의 components에는 useStore를 props로 뺄 필요없이 바로 사용 가능함</div>

        <BearCounter/>

        <Controls/>

        <div>🦄다른 components file에 useStore를 props로 빼서 만들기 쉬움</div>

        <Decrease useStore={useStore}/>
      </div>

      <div>      
        <h2>AI code</h2>
        {/* AI code <CartPage/>*/ }
        
        <CartPage/>

      </div>
    </div>
  );
}


const BearCounter = () => {

  const bears = useStore(state => state.bears)

  return (
     <h3>{bears} bears around here ...</h3>
  )
}


const Controls = () => {
  
  const increasePopulation = useStore(state => state.increasePopulation)

  return (

    // 🦄onClick = {()=>{ 함수()}}형태로 만들 필요 없음
    <button onClick={increasePopulation}> up</button>
  )
}



export default App;
