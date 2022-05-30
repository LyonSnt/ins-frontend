import { ILeftNavMenu } from "@modelos/ileft-nav-menu.metadata";
import { faUser, faCog, faClipboard, faComment, faHeart, faBookmark, faChartLine, faCogs } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

export const LEFT_NAV_MENUS: ILeftNavMenu[] = [
  {
    titulo: 'Mi cuenta',
    links: [
      {
        icon: faUser,
        nombre: 'Dashboard',
        link: '/panel'
      },
      {
        icon: faCog,
        nombre: 'Comunidad',
        link: '/panel/comunidad/agregar'
      },
      {
        icon: faClipboard,
        nombre: 'Sexo',
        link: '/panel/sexo/listar'
      },
      {
        icon: faComment,
        nombre: 'Opcion'
      }
    ]
  },
  {
    titulo: 'Opcion',
    links: [
      {
        icon: faYoutube,
        nombre: 'Opcion'
      },
      {
        icon: faHeart,
        nombre: 'Opcion'
      },
      {
        icon: faBookmark,
        nombre: 'Opcion'
      },
      {
        icon: faChartLine,
        nombre: 'Opcion'
      },
      {
        icon: faCogs,
        nombre: 'Opcion'
      }
    ]
  }
];
