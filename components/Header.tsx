/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Cart from "../islands/Cart.tsx";

export function Header() {
  return (
    <header
      class={tw`w-full bg-cover bg-no-repeat relative`}
      style={{
        backgroundImage: "url(/header_bg.svg)",
        height: 144,
      }}
    >
      <div class={`rainfall ${tw`w-full h-full absolute opacity-30`}`} />
      <nav
        class={tw
          `w-11/12 h-24 max-w-5xl mx-auto flex items-center justify-between relative`}
      >
        <a href="/" class={tw`flex flex-none gap-x-2`}>
          <img
            src="/logo.svg"
            alt="Deno Logo"
            class={tw`h-8 w-8`}
          />
        </a>
        <a href="/" class={tw`flex flex-none gap-x-2`}>
          <img
            src="/text_logo.svg"
            alt="Deno Merch"
            class={tw`h-6`}
          />
        </a>
        <Cart />
      </nav>
    </header>
  );
}