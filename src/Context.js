import React, { createContext } from 'react'


const user = createContext()

const Provider = user.Provider
const Consumer = user.Consumer


export {user,Provider,Consumer}