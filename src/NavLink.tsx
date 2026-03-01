import type { MouseEvent } from "react";

const NavLink = ({
  isDivided = true,
  name,
  link,
  onClick,
}: {
  isDivided?: boolean;
  name: string;
  link?: string;
  onClick?: () => void;
}) => {
  const onClickLink = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) onClick();
    if (link) window.open(link, "_blank");
  };
  return (
    <div>
      <a href="#" onClick={onClickLink}>
        {name}
      </a>
      {isDivided && <div className="divider"></div>}
    </div>
  );
};

export default NavLink;
