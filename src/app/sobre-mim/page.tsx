import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre Mim",
  description:
    "Mestre em Educação Física e em Ciências do Desporto, mais de 10 anos como Personal Trainer. Ciência aplicada ao treino, adaptada a cada pessoa.",
};

export default function SobreMimPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="grid md:grid-cols-[320px_1fr] gap-14">
        <div className="relative aspect-[4/5] border border-hairline bg-panel md:sticky md:top-24 h-fit">
          {/* Fotografia profissional: public/braulio-cavaco-original.jpg */}
          <Image
            src="/braulio-cavaco-original.jpg"
            alt="Bráulio Cavaco"
            fill
            sizes="320px"
            className="object-cover object-top"
          />
        </div>

        <div className="max-w-2xl">
          <h1 className="font-serif text-3xl md:text-4xl text-ink mb-8">Olá, sou o Bráulio.</h1>

          <div className="flex flex-col gap-6 text-ink2 leading-relaxed">
            <p>
              Trabalho como Personal Trainer há mais de 10 anos, mas o meu percurso no treino
              começou muito antes disso.
            </p>

            <p>
              Pratico musculação há mais de duas décadas e foi precisamente essa experiência
              que despertou o meu interesse por perceber o que realmente acontece quando
              treinamos. Como ganhar massa muscular, perder gordura, desenvolver força e,
              acima de tudo, como utilizar o exercício para melhorar a saúde e a qualidade de
              vida.
            </p>

            <section>
              <h2 className="text-sm text-gold mb-3">Formação</h2>
              <p>
                A minha formação académica acompanha essa procura por conhecimento. Sou{" "}
                <strong className="text-ink font-normal">Mestre em Educação Física</strong> e{" "}
                <strong className="text-ink font-normal">Mestre em Ciências do Desporto</strong>,
                com trabalho científico publicado na área do treino de força.
              </p>
            </section>

            <p>
              Ao longo dos anos, acompanhei pessoas com objectivos muito diferentes: ganhar
              massa muscular, perder gordura, melhorar a condição física, aumentar a força ou
              simplesmente voltar a sentir-se bem a treinar.
            </p>

            <section>
              <h2 className="text-sm text-gold mb-3">Treinar com limitações</h2>
              <p>
                Uma parte importante do meu trabalho é acompanhar pessoas com limitações
                físicas ou dores que querem continuar a treinar e recuperar confiança no
                próprio corpo. Ao longo do meu percurso, já trabalhei com praticamente todo o
                tipo de problemas osteomioarticulares e com dor crónica.
              </p>
              <p className="mt-4">
                Acredito que o exercício é uma das ferramentas mais importantes que temos para
                lidar com a dor.
              </p>
              <blockquote className="border-l-2 border-gold pl-5 my-6 font-serif italic text-lg text-ink">
                Em muitos casos, o movimento não é o problema. Pode fazer parte da solução.
              </blockquote>
              <p>
                Isso não significa ignorar a dor ou simplesmente &ldquo;treinar por cima
                dela&rdquo;. Significa perceber o contexto, adaptar o treino e encontrar formas
                de continuar a expor o corpo ao movimento e à carga de forma adequada.
              </p>
              <p className="mt-4">
                E é aqui que entra o meu trabalho: não procurar um corpo sem limitações, mas
                ajudar-te a construir um corpo mais forte e capaz apesar delas. O objectivo
                pode ser ganhar massa muscular, perder gordura, ficar mais forte, melhorar a
                condição física ou simplesmente conseguir treinar sem que a dor seja
                constantemente o motivo para parar.
              </p>
            </section>

            <section>
              <h2 className="text-sm text-gold mb-3">Forma de trabalhar</h2>
              <p>
                A minha abordagem parte de uma ideia simples: a ciência deve orientar o
                treino, mas o treino tem de ser adaptado à pessoa.
              </p>
              <p className="mt-4">
                Não acredito em exercícios universais, planos perfeitos ou soluções
                milagrosas. Acredito em princípios sólidos, progressão e capacidade para
                ajustar o plano à realidade de cada pessoa.
              </p>
              <p className="mt-4">
                Quero que percebas o que estás a fazer, porque o estás a fazer e, com o tempo,
                que tenhas cada vez mais autonomia sobre o teu próprio treino.
              </p>
            </section>

            <p className="font-serif italic text-xl text-ink pt-4">
              Porque o resultado não deve ser apenas um corpo diferente. Deve ser um corpo mais
              forte, mais capaz e que sabes usar durante muitos anos.
            </p>
          </div>

          <div className="flex gap-6 pt-8 mt-10 border-t border-hairline">
            <a
              href="https://instagram.com/brauliocavaco_personaltrainer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink2 hover:text-gold"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
