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

    import { SVGProps, VFC } from 'react';

    const SVG: VFC<SVGProps<SVGSVGElement>>;
    export default SVG;
}

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;

declare const __IS__DEV__: boolean;
declare const __API__: string;
