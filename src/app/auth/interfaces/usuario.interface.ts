export interface Usuario {
    usuario: UsuarioClass;
    token:   string;
}

export interface UsuarioClass {
    name:    string;
    email:   string;
    role:    string;
    google?: boolean;
    status?: boolean;
    uid:     string;
}
