import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IRoute{
    path:string;
    name:string;
    icon:IconDefinition;
    component:() => JSX.Element
}

export type Route=IRoute