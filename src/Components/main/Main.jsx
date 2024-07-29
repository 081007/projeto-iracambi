import Header from "../header/Header";
import Footer from "../footer/footer";

import Marketplace from "./Marketplace";

export default function Main() {
  return (
    <>
      <Header />

      <main>
        <Marketplace/>
      </main>

      <Footer />

    </>
  )
}
