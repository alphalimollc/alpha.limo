import Image from "next/image";

export default function Alpha() {
  return (
    <div className="Alpha">
      <header className="Alpha-header">
        <Image src="/logo.svg" className="Alpha-logo" alt="logo" width={350} height={350} />
        {}
        <p>
          Alpha Limo
        </p>
        {}
        <a
          className="Alpha-link"
          href="mailto:info@alpha.limo"
          target="_blank"
          rel="noopener noreferrer"
        >
        &copy; 2026 Alpha Limo LLC
        </a>
      </header>
    </div>
  )
}