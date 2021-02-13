import React, { ReactElement, useState } from 'react'
import { Props } from './Props'
interface IContext {
isCollapse: boolean;
setIsCollapse:React.Dispatch<React.SetStateAction<boolean>>
}
const defaultValue:IContext = {
    isCollapse:false,
    setIsCollapse:()=>{
        throw new Error('please provide a provider');
        
    }
}
export const NavContext = React.createContext<IContext | null>(defaultValue)

export function NavProvider({children}: Props): ReactElement {
    const [isCollapse, setIsCollapse] = useState(false);
    const value={
        isCollapse,
        setIsCollapse
    }
    return (
    <NavContext.Provider value={value}>
        {children}
    </NavContext.Provider>
    )
}
