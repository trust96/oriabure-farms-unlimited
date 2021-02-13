import { title } from "process";
import React, { ReactElement } from "react";
import { Props } from "./Props";

export default function Typography({ tag, children, variant,para,title,className }: Props): ReactElement {
  const Tag = `${tag}` as
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "p";

switch (variant){
  case 'title':
    return <Tag className={`title title--${title} ${className}`}>{children}</Tag>
    case 'para':
    return <Tag className={`para para--${para} ${className}` }>{children}</Tag>
    case 'caption':
      return <Tag className={`caption ${className}`}>{children}</Tag>
      case 'overline':
    return <Tag className={`overline ${className}`}>{children}</Tag>
}
}
