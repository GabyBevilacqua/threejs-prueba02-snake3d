import App from 'next/app';
import { JSX } from 'react';
import '../styles/main.css'
import '../styles/menu.css';
import '../styles/panel.css';
import '../styles/defeat.css';
import '../styles/victory.css';

export default class MyApp extends App {
    public render(): JSX.Element 
    {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />;
    }
}