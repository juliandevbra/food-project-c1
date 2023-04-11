import React, { useEffect } from "react";

const obtenerUsuario = () => Promise.resolve({ nombre: "Juan" });

const MenuBienvenida = () => {
    const [usuario, setUsuario] = React.useState(null);

    const onClick = async () => usuario ? setUsuario(null) : setUsuario(await obtenerUsuario());

    useEffect(() => {
        const buscarUsuario = async () => {
            const usuario = await obtenerUsuario();
            setUsuario(usuario);
        };
        buscarUsuario();
    }, []);

    return (
        <div>
            {usuario && <h1>Bienvenido: {usuario.nombre}</h1>}
            <button onClick={onClick}>
                {usuario ? "Cerrar sesión" : "Iniciar sesión"}
            </button>
        </div>
    );
};

export default MenuBienvenida;