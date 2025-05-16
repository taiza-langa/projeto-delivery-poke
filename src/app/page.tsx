import Image from "next/image";
import RotatingMenu from "@/components/Menu/RotatingMenu";
import About from "@/components/About/about";
import Endereco from "@/components/Endereco/page"; 

export default function Home() {
  return (
    <div className="body">
      <div className="home-container">
        <section id="home">
          <div className="content">
            <h3>O MELHOR E MAIS ORGÂNICO POKE</h3>
            <a href="#" className="btn">
              Pegue o seu agora
            </a>
            <p>Com ingredientes naturais e selecionados</p>
          </div>
        </section>
      </div>
      <About />
      <RotatingMenu />
      <Endereco />
    </div>
  );
}
