import Image from "next/image";
import RotatingMenu from "@/components/Menu/RotatingMenu";

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
      <section className="about" id="about">
        <div className="about-container">
          <div className="image-container">
            <Image src="/sobre.png" alt="Sobre nós" width={500} height={300} className="about-image"/>
          </div>
          <div className="text-container">
            <h3 className="about-title">O que faz nosso poke especial?</h3>
            <p>
              Todo texto tem que ter alguns aspectos formais, ou seja, tem que ter estrutura, elementos que estabelecem relação entre si. 
              Dentro dos aspectos formais temos a coesão e a coerência, que dão sentido e forma ao texto.
            </p>
            <p>
              "A coesão textual é a relação, a ligação, a conexão entre as palavras, expressões ou frases do texto".
            </p>
            <a href="#" className="btn">Saiba Mais</a>
          </div>
        </div>
      </section>

      <RotatingMenu />
    </div>
  );
}
