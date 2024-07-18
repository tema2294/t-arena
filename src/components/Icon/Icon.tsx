import {CSSObject} from "@mui/material";
import type {ComponentType} from 'react';

import type {IIconComponentProps} from './Icon.types';
import {iconNames} from './iconNames';

export const IconComponent = ({
                                  name,
                                  className,
                                  activeCursor,
                                  color,
                                  ...otherProps
                              }: IIconComponentProps): JSX.Element | null => {
    const Icon = iconNames[name] as unknown as ComponentType<Omit<IIconComponentProps, 'name'> & { style: CSSObject }>;

    const cursorType = !!activeCursor ? 'pointer' : 'default';

    const hasIcon = !!Icon;

    if (!hasIcon) {
        return null;
    }

    return <Icon style={{cursor: cursorType, flexShrink: 0}} className={className}
                 onClick={(e) => e} color={color} {...otherProps}/>;
};
