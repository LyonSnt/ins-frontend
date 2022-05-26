import { ILeftNavMenu } from "@modelos/left-nav-menu/ileft-nav-menu.metadata";
import { faUser, faCog, faClipboard, faComment, faHeart, faBookmark, faChartLine, faCogs } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

export const LEFT_NAV_MENUS: ILeftNavMenu[] = [
  {
    titulo: 'Mi cuenta',
    links: [
      {
        icon: faUser,
        nombre: 'Dashboard'
      },
      {
        icon: faCog,
        nombre: 'Categorias'
      },
      {
        icon: faClipboard,
        nombre: 'Administración'
      },
      {
        icon: faComment,
        nombre: 'Comenatrios'
      }
    ]
  },
  {
    titulo: 'Servicios',
    links: [
      {
        icon: faYoutube,
        nombre: 'Videos'
      },
      {
        icon: faHeart,
        nombre: 'Favoritos'
      },
      {
        icon: faBookmark,
        nombre: 'Articulos'
      },
      {
        icon: faChartLine,
        nombre: 'Estadisticas'
      },
      {
        icon: faCogs,
        nombre: 'Configuracion'
      }
    ]
  }
];
