import Head from "next/head";
import React, { Fragment } from "react";
import ContentLanding from "../parts/landing/ContentLanding";
import LandingBG from "../parts/landing/LandingBG";
import CatchPokemon from "../parts/pokeDex/CatchPokemon";
import { ModalProvider } from "../context/ModalProvider";
import Loaders from "../components/suspense/Loaders";
import useLoader from "../helpers/hooks/useLoader";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const isLoading = useLoader();

  return (
    <Fragment>
      <Head>
        <title>Pokemon</title>
        <meta name="description" content="catch pokemon" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />

        <link
          rel="icon"
          href="data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAC4uLgAz8/PAAAAAAD///8A29vbAAAA/wCmpqYA6+vrAAAAhwAAAOMAkZGRAAAA1AAAAL0AAACmAAAAAAAAAAAAIiIiIiIiIiIiIiN0EGIiIiIjMzdBBqIiIjMzM3QQaiIiMzMzN0EGIiMzMyIidBBiIzMyIiInQQIiIiIiIiIiIiIiIiIiIiIiJVVSIiIlm9IlVVUiIlm8giJVVVVVm80iIlVVVVm82CIiJVVVm82CIiIiJVm80iIiIiIiIiIiIiL4HwAA4AcAAMADAACAAQAAgAEAAAAAAAADwAAAAkAAAAJAAAADwAAAAAAAAIABAACAAQAAwAMAAOAHAAD4HwAA"
          type="image/x-icon"
        />
      </Head>

      <AnimatePresence>{isLoading ? <Loaders /> : null}</AnimatePresence>

      <div
        className={`Root relative bg-gray-100 transition duration-500 ease-in-out`}
      >
        <LandingBG />

        <ContentLanding />
        <ModalProvider>
          <CatchPokemon />
        </ModalProvider>
      </div>
    </Fragment>
  );
}
