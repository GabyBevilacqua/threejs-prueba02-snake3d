import App from 'next/app';
import { JSX } from 'react';
import '../styles/main.css'

export default class MyApp extends App {
    public render(): JSX.Element 
    {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />;
    }
}