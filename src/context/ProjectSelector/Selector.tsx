import React, { createContext, useState } from 'react'

const SelectorContext = createContext({
    state : { number : 0 },
    actions: {
        setNumber: () => {}
    }
})
const SelectorProvider = ( children: any ) => {
    const [ number, setNumber ] = useState(0)
    const Svalue:any = {
        state :  { number },
        actions : { setNumber }
    }

    return (
        <SelectorContext.Provider value = { Svalue }>
            {children}
        </SelectorContext.Provider>
    )
}

const { Consumer: SelectorConsumer } = SelectorContext

export { SelectorConsumer, SelectorProvider }

export default SelectorContext