import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBookmark, faChartLine, faClipboard, faCog, faCogs, faComment, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { ILeftNavMenu } from "@modelos/ileft-nav-menu.metadata";

export const LEFT_NAV_MENUS_ADMIN: ILeftNavMenu[] = [
  {
    titulo: 'Mi cuenta',
    links: [
      {
        icon: faUser,
        nombre: 'Dashboard Admin',
        link: '/admin',
      },
      {
        icon: faCog,
        nombre: 'Comunidad',
        link: '/admin/comunidad/agregar',
       
      },
      {
        icon: faClipboard,
        nombre: 'Sexo',
        link: '/admin/sexo/listar'
      },
      {
        icon: faComment,
        nombre: 'Estudiante',
        link: '/admin/estudiante/listar'
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
