import { ROLES_ENUM } from "app/enum/roles.enum";

export interface ILogin {
  id?: number;
  name: string;
  email: string;
  password: string;
  id_rol: number;
  accessToken: string;

  //esValido: () => boolean;
};
