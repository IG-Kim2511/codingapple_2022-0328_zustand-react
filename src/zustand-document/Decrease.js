import React from 'react'
// import shallow from 'zustand/shallow'



const Decrease = ({useStore}) => {

    // const { nuts, honey } = useStore(state => ({ nuts: state.nuts, honey: state.honey }), shallow)


    const decreasePopulation = useStore(state => state.decreasePopulation)

  return (
    <div>
    
    <button onClick={decreasePopulation}>  down</button>
    </div>
  )
}

export default Decrease