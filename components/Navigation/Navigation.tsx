import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <Link href={"/"}>Dagsoversikt</Link>
      <Link href={"/komplett"}>Komplett oversikt</Link>
      <Link href={"/ukeplaner"}>Ukeplaner</Link>
    </nav>
  );
};

export { Navigation };
