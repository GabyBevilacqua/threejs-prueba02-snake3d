import { Scene, WebGLRenderer } from "three";

export class RendererManager 
{  
    private static renderer : WebGLRenderer;
    private static scene: Scene
    public static canvas: HTMLCanvasElement;

    constructor() 
    {
        RendererManager.init();
        window.addEventListener("resize", RendererManager.resize);
        RendererManager.renderLoop();
    }

    private static init(): void
    {
        RendererManager.canvas = document.getElementById("game") as HTMLCanvasElement;
        RendererManager.renderer = new WebGLRenderer({ canvas: RendererManager.canvas, antialias: true });
        RendererManager.renderer.setPixelRatio(window.devicePixelRatio);
        RendererManager.renderer.setSize(window.innerWidth, window.innerHeight);
        RendererManager.renderer.toneMappingExposure = 2;
    }
    private static renderLoop(): void
    {

    }
    private static resize(): void
    {

    }   
}
