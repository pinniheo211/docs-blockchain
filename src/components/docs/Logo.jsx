import { ThemedImage } from "./ThemedImage";

export function Logo() {
  return (
    <a href="/">
      <ThemedImage
        height={70}
        width={270}
        src="/Layer_1-2.png"
        darkImage={"/Layer_1-2.png"}
        alt="Now Blockchain"
      />
    </a>
  );
}
