import React, { createContext, useState, useEffect } from 'react'

const SelectorContext = createContext({
    state : { number : 0 },
    actions: {
        setNumber: () => {}
    }
})

interface Ijson {
    children : Object
}
const SelectorProvider = (childrenJson : Ijson) => {
    const [ number, setNumber ] = useState(0)
    const Svalue:any = {
        state :  { number },
        actions : { setNumber }
    }

    return (
        <SelectorContext.Provider value = { Svalue }>
            {childrenJson.children}
        </SelectorContext.Provider>
    )
}

const SelectorConsumer:any = SelectorContext.Consumer

export { SelectorConsumer, SelectorProvider }

export default SelectorContext