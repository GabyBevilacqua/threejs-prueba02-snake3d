import App from 'next/app';
import { JSX } from 'react';
import Head from 'next/head';
import '../styles/main.css'
import '../styles/menu.css';
import '../styles/panel.css';
import '../styles/defeat.css';
import '../styles/victory.css';

export default class MyApp extends App {
    public render(): JSX.Element {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>Snake 3D Three.js</title>
                </Head>
                <Component {...pageProps} />
                <footer>
                    <p>Visitas:</p>
                    <img
                        src="https://visitor-badge.laobi.icu/badge?page_id=threejs-prueba02-snake3d.vercel.app"
                        alt="Contador de visitas"
                    />
                </footer>
            </>
        );
    }
}