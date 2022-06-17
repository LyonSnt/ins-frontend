import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBookmark, faChartLine, faClipboard, faCog, faCogs, faComment, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { ILeftNavMenu } from "@modelos/ileft-nav-menu.metadata";

export const LEFT_NAV_MENUS_PRF: ILeftNavMenu[] = [
  {
    titulo: 'Mi cuenta',
    links: [
      {
        icon: faUser,
        nombre: 'Dashboard',
        link: '/panel',
      },
      {
        icon: faCog,
        nombre: 'Lista estudiante',
        link: '/panel/comunidad/agregar'
      },
      {
        icon: faClipboard,
        nombre: 'Horaro',
        link: '/panel/sexo/listar'
      },
      {
        icon: faComment,
        nombre: 'Notas'
      }
    ]
  },
  {
    titulo: 'Detalle',
    links: [
      {
        icon: faYoutube,
        nombre: 'Historial'
      }
    ]
  }
];
