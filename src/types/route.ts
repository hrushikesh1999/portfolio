import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IRoute {
  path: string;
  name: string;
  icon: IconDefinition;
  color: string;
  component: () => JSX.Element;
}

export type Route = IRoute;
