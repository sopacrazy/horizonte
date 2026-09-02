import {
  Car,
  ChevronRight,
  Download,
  Gamepad2,
  MapPin,
  MessageCircle,
  Shield,
  Smartphone,
  Star,
  Users,
  Wrench,
} from 'lucide-react';

const featureCards = [
  {
    icon: MapPin,
    title: 'Mapa brasileiro vivo',
    text: 'Acelere por avenidas costeiras, bairros de morro, lojas, oficinas e pontos de encontro feitos para RP mobile.',
  },
  {
    icon: Car,
    title: 'Garagem completa',
    text: 'Monte carros, motos e viaturas com pintura, rodas, suspensao e acertos para deixar tudo com a sua cara.',
  },
  {
    icon: Shield,
    title: 'Crime ou policia',
    text: 'Escolha seu caminho, evolua na carreira, cumpra missoes e crie historias com outros jogadores online.',
  },
];

const steps = [
  'Baixe o launcher oficial do Horizonte no celular Android.',
  'Instale o APK e abra o jogo para concluir os arquivos necessarios.',
  'Crie seu apelido, escolha o servidor e toque em jogar.',
];

const seoBlocks = [
  {
    title: 'Jogo de carro',
    text: 'Horizonte e um jogo de carro e simulacao de vida inspirado no Brasil. Dirija pela cidade, participe de missoes, personalize veiculos e explore ruas com clima de roleplay mobile.',
  },
  {
    title: 'Motos do jogo',
    text: 'Alem dos carros, o Horizonte traz motos para quem prefere velocidade, agilidade e encontros pela cidade. Cada veiculo pode virar parte da sua identidade dentro do servidor.',
  },
  {
    title: 'Jogo de policia e ladrao',
    text: 'Entre para a policia, persiga suspeitos e suba de patente, ou viva o lado do crime em rotas de fuga e missoes arriscadas. A escolha muda a forma como voce joga.',
  },
  {
    title: 'Simulacao de vida',
    text: 'Crie um personagem, faca amizades, trabalhe, dirija, negocie e viva cenas de RP em uma cidade brasileira virtual pensada para celular.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0b0f] text-white">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-[#0b0b0f]/48 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#topo" className="flex items-center gap-3" aria-label="Horizonte">
            <img
              src="/logo.png"
              alt="Horizonte"
              className="h-14 w-auto max-w-[172px] object-contain drop-shadow-[0_0_22px_rgba(239,35,60,.45)]"
            />
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-white/78 md:flex">
            <a href="#como-jogar" className="transition hover:text-white">Como jogar</a>
            <a href="#mapa" className="transition hover:text-white">Mapa</a>
            <a href="#veiculos" className="transition hover:text-white">Veiculos</a>
            <a href="#comunidade" className="transition hover:text-white">Comunidade</a>
          </div>
          <a
            href="#download"
            className="inline-flex h-11 items-center gap-2 rounded-md bg-[#ef233c] px-4 text-sm font-black uppercase text-white shadow-[0_12px_30px_rgb(239_35_60/30%)] transition hover:-translate-y-0.5 hover:bg-[#ff4056]"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Baixar
          </a>
        </nav>
      </header>

      <section
        id="topo"
        className="relative min-h-[92vh] bg-[linear-gradient(90deg,rgba(8,8,12,.97)_0%,rgba(8,8,12,.82)_38%,rgba(8,8,12,.24)_74%),url('/horizonte-hero.png')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_32%,rgba(239,35,60,.25),transparent_26%),linear-gradient(180deg,transparent_72%,#0b0b0f_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 pb-14 pt-28 sm:px-8">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/16 bg-white/8 px-3 py-2 text-xs font-bold uppercase text-[#ffb3bc] backdrop-blur">
              <Star className="h-4 w-4 fill-[#ef233c] text-[#ef233c]" aria-hidden="true" />
              Brasil mobile RP para Android
            </div>
            <h1 className="text-5xl font-black leading-[0.95] tracking-normal sm:text-7xl lg:text-8xl">Horizonte</h1>
            <p className="mt-5 max-w-xl text-lg font-medium leading-8 text-white/82 sm:text-xl">
              Um jogo de simulacao de vida em um mundo inspirado no Brasil: carros, motos, policia, crime, amizades e missoes direto no seu celular.
            </p>
            <div id="download" className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#como-jogar"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-md bg-[#ef233c] px-6 text-base font-black uppercase text-white shadow-[0_18px_42px_rgb(239_35_60/34%)] transition hover:-translate-y-0.5 hover:bg-[#ff4056]"
              >
                Comecar a jogar
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="#comunidade"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-md border border-white/18 bg-white/10 px-6 text-base font-black uppercase text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16"
              >
                <Users className="h-5 w-5" aria-hidden="true" />
                Entrar na comunidade
              </a>
            </div>
            <div className="mt-9 grid max-w-lg grid-cols-3 gap-3">
              {[
                ['24h', 'servidor online'],
                ['80+', 'veiculos'],
                ['RP', 'vida brasileira'],
              ].map(([value, label]) => (
                <div key={value} className="border-l-2 border-[#ef233c] pl-3">
                  <strong className="block text-2xl font-black text-white">{value}</strong>
                  <span className="text-xs font-semibold uppercase text-white/62">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="como-jogar" className="bg-[#0b0b0f] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#ef233c]">Como posso comecar?</p>
            <h2 className="mt-3 max-w-xl text-3xl font-black tracking-normal sm:text-5xl">Baixe, instale e entre no Horizonte em poucos toques.</h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/68">O launcher cuida da instalacao dos componentes do jogo. Depois e so criar seu apelido, escolher a cidade e comecar sua historia.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step} className="rounded-md border border-white/10 bg-white/[0.06] p-6">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-[#ef233c] text-lg font-black text-white">{index + 1}</span>
                <p className="mt-5 text-sm font-semibold leading-6 text-white/78">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mapa" className="bg-[#151116] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="rounded-md border border-white/10 bg-[#20161a] p-7 shadow-[0_18px_70px_rgb(0_0_0/20%)]">
                  <Icon className="h-9 w-9 text-[#ef233c]" aria-hidden="true" />
                  <h3 className="mt-6 text-2xl font-black">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/68">{feature.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="veiculos" className="bg-[#f3f0ee] py-20 text-[#151014] sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-md">
            <img src="/horizonte-hero.png" alt="Carros e moto em uma cidade brasileira no jogo Horizonte" className="aspect-[4/3] w-full object-cover" />
            <div className="absolute bottom-4 left-4 rounded-md bg-[#0b0b0f]/88 px-4 py-3 text-white backdrop-blur">
              <p className="text-xs font-black uppercase text-[#ffb3bc]">Garagem Horizonte</p>
              <p className="text-xl font-black">turbine seu estilo</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-black uppercase text-[#c9182d]">Grande selecao de frota</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-5xl">Carros, motos e viaturas para dominar a cidade.</h2>
            <p className="mt-5 text-base leading-7 text-[#4d4648]">Personalize desde a cor ate a altura da suspensao. O Horizonte e feito para quem quer dirigir, competir, patrulhar, fugir, passear e mostrar presenca em cada esquina.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                [Wrench, 'Customizacao visual e mecanica'],
                [Smartphone, 'Feito para Android'],
                [MessageCircle, 'RP com outros jogadores'],
                [Gamepad2, 'Missoes e progressao'],
              ].map(([Icon, label]) => (
                <div key={label as string} className="flex items-center gap-3 rounded-md border border-[#ded4d4] bg-white p-4">
                  <Icon className="h-5 w-5 text-[#c9182d]" aria-hidden="true" />
                  <span className="text-sm font-bold">{label as string}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-[#151014] sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase text-[#c9182d]">Tudo em suas maos</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-5xl">Construa a carreira dos seus sonhos.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {seoBlocks.map((block) => (
              <article key={block.title} className="border-t-4 border-[#ef233c] pt-5">
                <h3 className="text-xl font-black">{block.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5e5658]">{block.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="comunidade" className="bg-[#0b0b0f] px-5 py-20 text-center sm:px-8 sm:py-24">
        <p className="text-sm font-black uppercase text-[#ef233c]">Junte-se a milhares de jogadores</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black tracking-normal sm:text-5xl">Faca amigos, organize corridas e viva aventuras inesqueciveis.</h2>
        <div className="mx-auto mt-8 flex max-w-lg flex-wrap justify-center gap-3">
          {['Telegram', 'Facebook', 'Instagram', 'Discord'].map((item) => (
            <a key={item} href="#topo" className="rounded-md border border-white/12 bg-white/[0.06] px-4 py-3 text-sm font-black uppercase text-white/80 transition hover:border-[#ef233c] hover:text-white">{item}</a>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0b0b0f] px-5 py-8 text-center text-sm text-white/52 sm:px-8">
        <p>© 2026 Horizonte. Jogo mobile RP ficticio para demonstracao.</p>
      </footer>
    </main>
  );
}
