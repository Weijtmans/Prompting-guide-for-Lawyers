export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/10"></div>
      <div className="relative py-16 px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white drop-shadow-lg">
          Prompting hand-out voor advocaten
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto">
          Praktische handleiding voor effectieve gebruik van AI-tools door advocaten
        </p>
      </div>
    </header>
  )
}
