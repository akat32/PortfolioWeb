import React, { createContext, useState, useEffect } from 'react'

const DeviceContext = createContext({
    state : { device : 'IPhone' }, // IPhone, Tablet, Computer
    actions: {
        setDevice: () => {}
    }
})

interface Ijson {
    children : Object
}
const DeviceProvider = (childrenJson : Ijson) => {
    const [ device, setDevice ] = useState('IPhone')
    const Svalue:any = {
        state :  { device },
        actions : { setDevice }
    }

    return (
        <DeviceContext.Provider value = { Svalue }>
            {childrenJson.children}
        </DeviceContext.Provider>
    )
}

const DeviceConsumer:any = DeviceContext.Consumer

export { DeviceConsumer, DeviceProvider }

export default DeviceContext