import { ReactElement, useState } from "react";
import { ExpandMore } from "../Assets";

interface HideawayProps {
  title: string | ReactElement;
  children: ReactElement;
  isOpen?: boolean;
  classNames?: string;
}

const Hideaway = (props: HideawayProps) => {
  const [visInnhold, toggleVisInnhold] = useState<boolean>(
    props.isOpen ?? false
  );
  const classes = `hideaway ${props.classNames}`;
  return (
    <section className={classes}>
      <button type={"button"} onClick={() => toggleVisInnhold(!visInnhold)}>
        {props.title}
        <ExpandMore />
      </button>
      {visInnhold && props.children}
    </section>
  );
};
export { Hideaway };
