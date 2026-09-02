import {
  Car,
  ChevronRight,
  Download,
  Flame,
  Gamepad2,
  MapPin,
  MessageCircle,
  Shield,
  Smartphone,
  Sparkles,
  Star,
  Trophy,
  Users,
  Wrench,
  Zap,
} from 'lucide-react';

const serverStats = [
  ['24h', 'cidade online'],
  ['80+', 'veiculos'],
  ['RP', 'voz e acao'],
  ['BR', 'mapa vivo'],
];

const playModes = [
  {
    icon: Car,
    title: 'Rua e fuga',
    text: 'Pega o carro, chama os amigos e domina as avenidas com corrida, role e missao.',
  },
  {
    icon: Shield,
    title: 'Patrulha',
    text: 'Veste a farda, fecha a cidade e sobe de patente em operacoes pelo mapa.',
  },
  {
    icon: Wrench,
    title: 'Oficina',
    text: 'Baixa, pinta, troca roda, mexe no setup e monta um veiculo com sua assinatura.',
  },
];

const steps = [
  ['01', 'Baixe o launcher', 'Instale o APK oficial do Horizonte no Android.'],
  ['02', 'Crie seu nome', 'Escolha apelido, servidor e visual do personagem.'],
  ['03', 'Entre na cidade', 'Pegue seu primeiro veiculo e comece o RP.'],
];

const spotlights = [
  {
    id: 'mapa',
    kicker: 'Um mapa unico do Brasil',
    title: 'Cidade grande, morro, praia e avenida. Tudo no modo paisagem.',
    text: 'O Horizonte foi pensado para jogar deitado no celular, com uma cidade brasileira aberta para role, encontros, fuga, patrulha, oficina e missao. Cada esquina tem historia para acontecer.',
    image: '/horizonte-hero.webp',
    alt: 'Gameplay horizontal do Horizonte em uma avenida brasileira',
    tag: 'Mundo aberto',
  },
  {
    id: 'veiculos',
    kicker: 'Garagem sem miseria',
    title: 'Carro baixo, moto forte e customizacao para aparecer no servidor.',
    text: 'Monte sua garagem do zero. Troque visual, ajuste o carro, escolha a moto do role e mostre presenca quando chegar no ponto de encontro.',
    image: '/garage-gameplay.webp',
    alt: 'Garagem de customizacao com carro e moto do Horizonte',
    tag: 'Tuning',
  },
  {
    id: 'carreira',
    kicker: 'Vida dupla',
    title: 'Hoje voce patrulha. Amanha talvez esteja fugindo.',
    text: 'Siga a lei, encare o crime ou viva livre pela cidade. O servidor muda conforme os jogadores entram, combinam cenas e criam suas proprias tretas de RP.',
    image: '/police-gameplay.webp',
    alt: 'Cena de carreira policial em uma cidade brasileira no Horizonte',
    tag: 'Carreira RP',
  },
];

const quickBits = [
  'Carros brasileiros e importados',
  'Motos para corte e fuga',
  'Empregos, policia e crime',
  'Roleplay com comunidade',
  'Oficinas e pontos de encontro',
  'Missoes para evoluir rapido',
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08080b] text-white">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-[#08080b]/58 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#topo" className="flex items-center" aria-label="Horizonte">
            <img
              src="/logo.webp"
              alt="Horizonte"
              className="h-14 w-auto max-w-[174px] object-contain drop-shadow-[0_0_22px_rgba(239,35,60,.5)]"
            />
          </a>
          <div className="hidden items-center gap-7 text-sm font-black uppercase text-white/72 md:flex">
            <a href="#como-jogar" className="transition hover:text-white">baixar</a>
            <a href="#mapa" className="transition hover:text-white">cidade</a>
            <a href="#veiculos" className="transition hover:text-white">garagem</a>
            <a href="#comunidade" className="transition hover:text-white">discord</a>
          </div>
          <a href="#download" className="inline-flex h-11 items-center gap-2 rounded-md bg-[#ef233c] px-4 text-sm font-black uppercase text-white shadow-[0_12px_30px_rgb(239_35_60/34%)] transition hover:-translate-y-0.5 hover:bg-[#ff4056]">
            <Download className="h-4 w-4" aria-hidden="true" />
            jogar agora
          </a>
        </nav>
      </header>

      <section id="topo" className="relative min-h-[96vh] bg-[linear-gradient(90deg,rgba(8,8,11,.98)_0%,rgba(8,8,11,.82)_42%,rgba(8,8,11,.28)_100%),url('/horizonte-hero.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(239,35,60,.28),transparent_24%),linear-gradient(180deg,transparent_68%,#08080b_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-[repeating-linear-gradient(135deg,rgba(239,35,60,.22)_0_2px,transparent_2px_18px)] opacity-35" />
        <div className="relative z-10 mx-auto flex min-h-[96vh] max-w-7xl items-center px-5 pb-14 pt-28 sm:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-[#ef233c]/45 bg-[#ef233c]/12 px-3 py-2 text-xs font-black uppercase text-[#ffb3bc] backdrop-blur">
              <Flame className="h-4 w-4 fill-[#ef233c] text-[#ef233c]" aria-hidden="true" />
              servidor mobile rp brasileiro
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-normal sm:text-7xl lg:text-8xl">
              A cidade ta ligada. Falta voce.
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-bold leading-8 text-white/82 sm:text-xl">
              Horizonte e RP de rua no celular: carro baixo, moto, policia, crime, oficina, amizade e missao em um mapa com clima de Brasil.
            </p>
            <div id="download" className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#como-jogar" className="inline-flex h-14 items-center justify-center gap-3 rounded-md bg-[#ef233c] px-6 text-base font-black uppercase text-white shadow-[0_18px_42px_rgb(239_35_60/38%)] transition hover:-translate-y-0.5 hover:bg-[#ff4056]">
                baixar apk
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#mapa" className="inline-flex h-14 items-center justify-center gap-3 rounded-md border border-white/18 bg-white/10 px-6 text-base font-black uppercase text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16">
                <Gamepad2 className="h-5 w-5" aria-hidden="true" />
                ver gameplay
              </a>
            </div>
            <div className="mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
              {serverStats.map(([value, label]) => (
                <div key={value} className="rounded-md border border-white/12 bg-black/38 p-4 backdrop-blur">
                  <strong className="block text-3xl font-black text-[#ef233c]">{value}</strong>
                  <span className="text-xs font-black uppercase text-white/66">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#08080b] py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-5 sm:px-8">
          {quickBits.map((bit) => (
            <span key={bit} className="rounded-md border border-white/10 bg-white/[0.06] px-4 py-3 text-xs font-black uppercase text-white/76">
              {bit}
            </span>
          ))}
        </div>
      </section>

      <section id="como-jogar" className="bg-[#121217] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#ef233c]">Sem enrolacao</p>
            <h2 className="mt-3 max-w-xl text-3xl font-black tracking-normal sm:text-5xl">Instalou, criou nick, entrou na cidade.</h2>
            <p className="mt-5 max-w-lg text-base font-semibold leading-7 text-white/64">A primeira sessao ja te coloca no mapa. Baixa o launcher, escolhe seu nome e decide se vai de role, trabalho, oficina ou patrulha.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map(([number, title, text]) => (
              <div key={number} className="relative overflow-hidden rounded-md border border-white/10 bg-[#1c171b] p-6">
                <span className="absolute -right-2 -top-5 text-7xl font-black text-white/[0.04]">{number}</span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#ef233c] text-sm font-black text-white">{number}</span>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/66">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#08080b] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#ef233c]">Escolha seu corre</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-5xl">Nao e vitrine. E servidor pra jogar.</h2>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-md bg-[#ef233c] px-4 py-3 text-sm font-black uppercase text-white">
              <Zap className="h-5 w-5" aria-hidden="true" />
              RP em tempo real
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {playModes.map((mode) => {
              const Icon = mode.icon;
              return (
                <article key={mode.title} className="rounded-md border border-white/10 bg-[#16161c] p-7 shadow-[0_18px_70px_rgb(0_0_0/20%)] transition hover:-translate-y-1 hover:border-[#ef233c]/55">
                  <Icon className="h-10 w-10 text-[#ef233c]" aria-hidden="true" />
                  <h3 className="mt-6 text-2xl font-black">{mode.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-white/66">{mode.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {spotlights.map((section, index) => (
        <section key={section.id} id={section.id} className={index % 2 === 0 ? 'bg-[#f4f1ef] py-20 text-[#151014] sm:py-24' : 'bg-white py-20 text-[#151014] sm:py-24'}>
          {index === 0 && (
            <div className="mx-auto mb-14 max-w-6xl px-5 sm:px-8">
              <div className="relative rotate-[-1deg] rounded-[2.35rem] border-[10px] border-[#16161b] bg-[#16161b] p-2 shadow-[0_30px_90px_rgba(21,16,20,.26),0_0_70px_rgba(239,35,60,.2)]">
                <div className="absolute left-4 top-1/2 z-10 h-24 w-5 -translate-y-1/2 rounded-full bg-[#08080b]" />
                <div className="absolute right-4 top-1/2 z-10 h-24 w-5 -translate-y-1/2 rounded-full bg-[#08080b]" />
                <img src="/gameplay.webp" alt="Gameplay do Horizonte dentro de um celular" className="aspect-[16/8] w-full rounded-[1.65rem] object-cover" />
                <div className="absolute bottom-6 left-1/2 flex w-[86%] -translate-x-1/2 items-center justify-between rounded-md border border-white/14 bg-black/62 px-4 py-3 text-white backdrop-blur">
                  <span className="text-xs font-black uppercase">modo paisagem</span>
                  <span className="rounded-md bg-[#ef233c] px-3 py-1 text-xs font-black uppercase">gameplay real</span>
                </div>
              </div>
            </div>
          )}
          <div className={`mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center ${index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}>
            <div className="relative overflow-hidden rounded-md shadow-[0_22px_70px_rgba(21,16,20,.18)]">
              <img src={section.image} alt={section.alt} loading={index === 0 ? 'eager' : 'lazy'} className="aspect-[16/10] w-full object-cover" />
              <div className="absolute left-5 top-5 rounded-md bg-[#ef233c] px-3 py-2 text-xs font-black uppercase text-white">{section.tag}</div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/86 to-transparent p-5 text-white">
                <p className="text-xs font-black uppercase text-[#ffb3bc]">Horizonte gameplay</p>
                <p className="mt-1 text-2xl font-black">{section.kicker}</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-black uppercase text-[#c9182d]">{section.kicker}</p>
              <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-5xl">{section.title}</h2>
              <p className="mt-5 text-base font-semibold leading-7 text-[#4d4648]">{section.text}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  [Wrench, 'customizacao'],
                  [Smartphone, 'Android'],
                  [MessageCircle, 'RP online'],
                  [Trophy, 'progressao'],
                ].map(([Icon, label]) => (
                  <div key={label as string} className="flex items-center gap-3 rounded-md border border-[#ded4d4] bg-white p-4">
                    <Icon className="h-5 w-5 text-[#c9182d]" aria-hidden="true" />
                    <span className="text-sm font-black uppercase">{label as string}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#111116] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase text-[#ef233c]">Tudo em suas maos</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-5xl">O servidor vira o que a galera joga.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['Jogo de carro', 'Dirija pela cidade, entre em corridas e use o carro como parte da sua identidade no RP.'],
              ['Motos do jogo', 'Corte rapido, encontro no posto, fuga ou passeio. Moto tambem tem espaco no Horizonte.'],
              ['Policia e ladrao', 'Patrulhe, investigue, fuja, negocie e crie cenas com consequencia no servidor.'],
              ['Vida livre', 'Trabalhe, faca amizade, monte garagem e viva sua propria rotina dentro da cidade.'],
            ].map(([title, text]) => (
              <article key={title} className="rounded-md border border-white/10 bg-white/[0.05] p-6">
                <Sparkles className="h-6 w-6 text-[#ef233c]" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/64">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="comunidade" className="bg-[#08080b] px-5 py-20 text-center sm:px-8 sm:py-24">
        <p className="text-sm font-black uppercase text-[#ef233c]">Chama a tropa</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black tracking-normal sm:text-5xl">Entre no Horizonte, cola no ponto e comeca sua historia.</h2>
        <div className="mx-auto mt-8 flex max-w-lg flex-wrap justify-center gap-3">
          {['Telegram', 'Facebook', 'Instagram', 'Discord'].map((item) => (
            <a key={item} href="#topo" className="rounded-md border border-white/12 bg-white/[0.06] px-4 py-3 text-sm font-black uppercase text-white/80 transition hover:border-[#ef233c] hover:text-white">{item}</a>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#08080b] px-5 py-8 text-center text-sm font-semibold text-white/48 sm:px-8">
        <p>© 2026 Horizonte. Jogo mobile RP ficticio para demonstracao.</p>
      </footer>
    </main>
  );
}
