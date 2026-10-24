
function PageNotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-100 px-4">

      {/* Background Effects */}
      <div className="absolute left-10 top-20 h-40 w-40 animate-pulse rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-56 w-56 animate-pulse rounded-full bg-purple-300/30 blur-3xl" />

      {/* Floating Stars */}
      <span className="absolute left-[15%] top-[25%] animate-ping text-xl text-blue-400">
        ✦
      </span>
      <span className="absolute right-[18%] top-[30%] animate-pulse text-2xl text-purple-400">
        ✧
      </span>
      <span className="absolute bottom-[20%] left-[25%] animate-bounce text-2xl text-indigo-400">
        ✦
      </span>
      <span className="absolute bottom-[30%] right-[25%] animate-ping text-sm text-blue-400">
        ✦
      </span>

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">

        {/* Animated 404 */}
        <div className="relative mx-auto mb-6 flex h-56 items-center justify-center sm:h-72">

          {/* Orbit */}
          <div className="absolute h-48 w-48 animate-spin rounded-full border-2 border-dashed border-indigo-300 sm:h-64 sm:w-64" />

          <div className="absolute h-36 w-36 rounded-full bg-blue-400/10 blur-2xl sm:h-52 sm:w-52" />

          {/* Number */}
          <h1 className="relative animate-pulse bg-gradient-to-b from-indigo-950 via-blue-800 to-indigo-500 bg-clip-text text-8xl font-black tracking-tighter text-transparent drop-shadow-xl sm:text-9xl md:text-[12rem]">
            404
          </h1>

          {/* Floating Question Mark */}
          <div className="absolute right-[12%] top-2 animate-bounce rounded-2xl bg-white px-4 py-2 text-3xl font-bold text-indigo-600 shadow-lg sm:right-[18%]">
            ?
          </div>

          {/* Small Planet */}
          <div className="absolute bottom-8 left-[12%] h-10 w-10 animate-bounce rounded-full bg-gradient-to-br from-purple-300 to-indigo-500 shadow-lg sm:left-[18%]">
            <div className="absolute left-2 top-2 h-2 w-2 rounded-full bg-white/70" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Page Not{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Found
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-md text-base leading-7 text-slate-500 sm:text-lg">
          Oops! The page you are looking for doesn't exist
          or has been moved to another galaxy.
        </p>

        {/* Home Button */}
        <a
          href="/"
          className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/40 active:scale-95"
        >
          <svg
            className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m3 10 9-7 9 7" />
            <path d="M5 9v12h14V9" />
            <path d="M9 21v-7h6v7" />
          </svg>

          Go to Home

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        {/* Footer */}
        <p className="mt-10 text-sm text-slate-400">
          Error 404 · Lost in space, not forever.
        </p>
      </div>
    </div>
  );
}

export default PageNotFound;
