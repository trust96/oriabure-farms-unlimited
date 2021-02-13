import { ReactElement } from "react";
import { NavProvider } from "../../../context/navcontext";
import { Navbar } from "../../modules/Navbar";
import { Props } from "./Props";

export default function Nav({ children }: Props): ReactElement {
  return (
    <NavProvider>
    <nav className="nav">

           <Navbar variant="desktop"/>
       <Navbar variant="mobile"/>  


    </nav>
    </NavProvider>
  );
}



