declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }

    const classNames: IClassNames;
    export = classNames;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import { FunctionComponent, SVGAttributes } from 'react';

    const content: FunctionComponent<SVGAttributes<SVGElement>>;
    export default content;
}
// declare module '*.svg' {
//     const content: any;
//     export default content;
// }

declare const __IS__DEV__: boolean;
declare module 'svg-sprite-html-webpack'
