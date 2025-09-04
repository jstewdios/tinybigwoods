export default function Feature({icon, title, children}:{icon?:string, title:string, children:React.ReactNode}) {
  return (
    <div className="card p-6 h-full">
      <div className="text-2xl mb-3">{icon ?? "🌲"}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-white/80 mt-2 leading-relaxed">{children}</p>
    </div>
  )
}
