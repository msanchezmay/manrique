export interface IBase {
    id_sistema: number;
    descripcion: string;
    usuario?: string;
    token?: any;
}


export interface IMensajes {
    titulo: string;
    mensaje: string;
}