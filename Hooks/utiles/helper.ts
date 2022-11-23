import { Fragment } from "react";
import { ICONS } from "utils";

export const getIcon = (icon: ICONS, color?: string): JSX.Element => {
    switch (icon) {
        case ICONS.SENDING_MAIL:
        case ICONS.MESSAGE:
        case ICONS.USER:
            return (
                <i className= {`icon-${icon}${color ? `-${color}` : ""} mltColorIcon`
    }>
        <span className="path1" />
            <span className="path2" />
                </i>
      );
    case ICONS.LOCK:
    case ICONS.CLOSE:
return <i className={ `icon-${icon}` } />;
    default:
return <Fragment />;
  }
};

export default getIcon;
