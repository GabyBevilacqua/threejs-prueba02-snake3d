import { Component, ReactNode } from "react"

export default class Panel extends Component {
    public render(): ReactNode {
        return (
            <div id="panel">
                <h3 className="title">Creditos</h3>
                <div className="text">
                    <p>Desarrollado por GabyBevilacqua.</p>
                    <p>Perfil en GitHub:</p>
                    <a href="https://github.com/GabyBevilacqua" target="_blank" rel="noopener noreferrer">
                        https://github.com/GabyBevilacqua
                    </a>
                    <p>Repositorio del proyecto en GitHub:</p>
                    <a href="https://github.com/GabyBevilacqua/threejs-prueba02-snake3d" target="_blank" rel="noopener noreferrer">
                        https://github.com/GabyBevilacqua/threejs-prueba02-snake3d
                    </a>
                    <p>
                        Basado en <a href="https://github.com/BabylonJs/SpacePirates" target="_blank" rel="noopener noreferrer">https://github.com/BabylonJs/SpacePirates</a>
                        <br />pero realizado en three js.
                    </p>
                    <p>Hecho con fines educativos.</p>
                </div>
                <img src="/ui/textPanel.png" alt="credit" className="credit-image" />
            </div>
        )
    }

}
