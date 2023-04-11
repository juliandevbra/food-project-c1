import { useState } from "react";

const guardarCambios = (value) => Promise.resolve(value);

const BotonGuardar = (props) => {
    const { onBtnClick } = props;
    return <button onClick={onBtnClick}>Guardar</button>;
};

const TipoPerfil = () => {
    const [tipoPerfil, setTipoPerfil] = useState("publico");
    const [cambiosGuardados, setCambiosGuardados] = useState(false);

    const onSelect= (e) => {
        setTipoPerfil(e.target.value);
        setCambiosGuardados(false);
    };

    const onClick = async () => {
        await guardarCambios(tipoPerfil);
        setCambiosGuardados(true);
    };

    return (
        <div>
            <label htmlFor="perfil">Elige el tipo de perfil</label>
            <select name="tipoPerfil" id="perfil" onChange={onSelect}>
                <option value="">Seleccione una opción</option>
                <option value="publico">Público</option>
                <option value="privado">Privado</option>
            </select>
            <h3>{cambiosGuardados ? "Cambios guardados" : "Cambios no guardados"}</h3>
            {!cambiosGuardados && <BotonGuardar onBtnClick={onClick} />}
        </div>
    );
};

export default TipoPerfil;