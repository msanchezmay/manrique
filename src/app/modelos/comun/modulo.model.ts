
export interface IMenu {
    idModulo: number
    modulo: string
    IdPadre: number
    class: string
    orden: number
    routerLink: string
    hijos: IMenu[]
  } 