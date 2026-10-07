
function SchematicMap() {
  return (
    <div className="relative aspect-[1280/420] w-full overflow-hidden rounded-2xl bg-[#e9e9e2]">
      {/* Roads + parks */}
      <svg
        viewBox="0 0 1280 420"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {/* Parks */}
        <rect x="64" y="34" width="243" height="84" rx="24" fill="#d8e0d2" />
        <rect x="819" y="252" width="370" height="143" rx="42" fill="#d8e0d2" />

        {/* Diagonal main road */}
        <line
          x1="-20"
          y1="440"
          x2="1300"
          y2="-20"
          stroke="#f8f5e8"
          strokeWidth="40"
        />

        {/* Street block */}
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="18"
          strokeLinejoin="miter"
        >
          {/* outer block */}
          <polygon points="285,138 984,80 1080,225 392,306" />
          {/* middle street */}
          <line x1="365" y1="236" x2="1015" y2="162" />
          {/* cross streets */}
          <line x1="655" y1="112" x2="745" y2="248" />
        </g>
      </svg>

      {/* Street labels */}
      <span className="absolute left-[6.5%] top-[8.5%] text-[13px] font-medium tracking-wide text-slate-500">
        FITZROVIA
      </span>
      <span className="absolute left-1/2 top-[17.5%] -translate-x-1/2 text-[11px] text-slate-500">
        Charlotte Street
      </span>
      <span className="absolute left-[43.7%] top-[79.5%] text-[11px] text-slate-500">
        Tottenham Court Road
      </span>

      {/* Pin + info card */}
      <div className="absolute left-1/2 top-[55.5%] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute bottom-[calc(100%+9px)] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-[18px] py-3 text-center shadow-sm">
          <p className="text-[15px] font-medium leading-tight text-slate-800">
            Forma Studio
          </p>
          <p className="mt-1 text-[12px] leading-tight text-slate-500">
            24 Charlotte Street
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
          <svg
            viewBox="0 0 24 24"
            className="h-[18px] w-[18px]"
            fill="none"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
            <circle cx="12" cy="9.5" r="2.5" />
          </svg>
        </div>
      </div>

      {/* Caption */}
      <div className="absolute bottom-3 left-4 rounded-md bg-white px-3 py-2 text-[11px] text-slate-500">
        London studio · Schematic location map
      </div>
    </div>
  );
}

export default function LocationSection() {
  return (
    <section className="min-h-screen bg-white font-['Inter',sans-serif]">
      <div className="mx-auto max-w-[1280px] px-6 pb-16 pt-20 md:px-0">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-medium tracking-wide text-slate-500">
              <span className="h-[5px] w-[5px] bg-blue-600" />
              OUR LONDON HOME
            </p>
            <h1 className="mt-4 text-4xl font-normal tracking-tight text-slate-800 md:text-[46px] md:leading-[1.1]">
              Come by. Think bigger.
            </h1>
          </div>

          <div className="text-[15px] leading-[22px] text-slate-500 md:mr-[100px] md:mt-6">
            <p>24 Charlotte Street, London W1T 2ND</p>
            <p>5 minutes from Goodge Street station.</p>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10">
          <SchematicMap />
        </div>

        {/* Footer note */}
        <p className="mt-14 flex items-center gap-3 text-[14px] text-slate-500">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 10h13v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5z" />
            <path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H17" />
            <path d="M8 3v2M11 3v2M14 3v2" />
          </svg>
          Visits by appointment. We’ll put the coffee on.
        </p>
      </div>
    </section>
  );
}
