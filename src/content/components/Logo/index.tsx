import React, { ReactElement } from 'react'
import { Props } from './Props'

export default function Logo({variant,className}: Props): ReactElement {
    return (
        <a className={`logo logo--${variant} ${className}`} href="/">
            <img className="img-fluid" src="/Images/logo-small.jpeg"/>
        </a>
    )
}
