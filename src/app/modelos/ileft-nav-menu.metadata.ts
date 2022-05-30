export interface ILeftNavMenu {
  titulo: string;
  links: {
    icon: any;
    nombre: string;
    link?: string;
    metodo?: () => any;
  }[];
};

