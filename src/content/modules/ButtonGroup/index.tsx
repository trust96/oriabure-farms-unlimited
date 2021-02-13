import React, { ReactElement } from 'react'
import Props from './Props'


export default function ButtonGroup({children}: Props): ReactElement {
    return (
        <div className="btn-group">
            {children}
        </div>
    )
}
