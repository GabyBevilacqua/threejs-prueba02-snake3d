import { Component, ReactNode } from "react"

export default class Panel extends Component 
{
    public render(): ReactNode 
    {
        return (
            <div id="panel">
                <h3 className="title">Creditos</h3>
                <div className="text">
                    <p>Desarrollado por Gaby</p>
                    <p>
                    Perfil en GitHub: 
                    </p>
                    <p>https://github.com/GabyBevilacqua</p>
                    <p>
                    Repositorio del proyecto en GitHub: 
                    </p>
                    <p>https://github.com/GabyBevilacqua/threejs-prueba02-snake3d</p>
                    <p>basado en https://github.com/BabylonJs/SpacePirates pero realizado en three js</p>
                    <p>hecho con fines educatios</p>
                </div>
                <img src="/ui/textPanel.png" alt="credit" className="credit-image" />
            </div>
        )
    }

}
