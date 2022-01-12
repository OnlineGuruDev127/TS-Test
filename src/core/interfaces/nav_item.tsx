export interface NavItem {
  name: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentClass<any, any> | React.FunctionComponent<any>;
}
