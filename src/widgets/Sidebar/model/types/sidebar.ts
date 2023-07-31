import { SVGProps, VFC } from 'react';

export interface ISidebarItemsType {
    path: string
    text: string
    Icon: VFC<SVGProps<SVGSVGElement>>
    authOnly?: boolean
}
