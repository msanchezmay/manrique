import { IBase } from "./base.model";

export interface IPermiso extends IBase {
    id_permisos: number;
    descripcion_permisos: string;
    seleccionado?:boolean;
}

export interface ISegModulo extends IBase {
    id_modulo: number;
    id_padre?: number;
    descripcion_modulo: string;
    class: string;
    orden: number;
    routerlink: string;
    clave: string;
    click: string;
}

export interface ISegRol extends IBase {
    id_rol: number;
    descripcion_rol: string;
}

export interface IPersona extends IBase {
    id_persona: number;
    nombrecompleto: string;
    id_persona_sistema?: number;
    buscar: string;
}

export interface ISegRoles extends IBase {
    id_rol: number;
    id_persona: number;
    rol:ISegRol;
    persona: IPersona;
    role?:ISegRol;
}
export interface ISegPrivilegios extends IBase {
    id_modulo:number;
    id_rol: number;
    id_permisos: number;
    modulo: ISegModulo;
}