import { Collection } from "../components/collection/collection";
import { Vizit } from "../components/vizit/vizit";
import { Introductions } from "../components/introductions/introductions";

export const HomePage = () => {
  return (
    <>
      <Introductions />
      <Collection />
      <Vizit />
    </>
  );
};
