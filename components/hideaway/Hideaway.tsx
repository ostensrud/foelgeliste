import { ReactElement, useState } from "react";

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
  return (
    <section className={props.classNames}>
      <button type={"button"} onClick={() => toggleVisInnhold(!visInnhold)}>
        {props.title}
      </button>
      {visInnhold && props.children}
    </section>
  );
};
export { Hideaway };
