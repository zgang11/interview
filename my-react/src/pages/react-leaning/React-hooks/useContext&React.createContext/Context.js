import { createContext } from 'react'

const userInfo = {name:'zgang1',age:27}
const otherInfo = {college:'Anhui University of Science and Technology'}

export const Context = createContext({userInfo,otherInfo})