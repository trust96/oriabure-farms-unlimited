import React, { ReactElement } from 'react'
import Props from './Props'

export default function Link({children,variant,className,href}: Props): ReactElement {
    return (
        <a className={`link link--${variant} ${className}`} href={href}>
            {children}
        </a>
    )
}
