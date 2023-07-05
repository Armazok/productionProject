declare module '*.scss' {
    type IClassNames = Record<string, string>

    const classNames: IClassNames;
    export = classNames
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'

declare module '*.svg' {
    import { FunctionComponent, SVGAttributes } from 'react';

    const content: FunctionComponent<SVGAttributes<SVGElement>>;
    export default content;
}

declare const __IS__DEV__: boolean;
