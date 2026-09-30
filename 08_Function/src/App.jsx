function App() {
  
    function handleSystemPing() {
    alert("Backend Server Status: 200 OK (Running smoothly)");
  }

  function handleEnroll(courseName, price) {
    alert(`Successfully enrolled in: ${courseName} for ₹${price}!`);
  }

  // 1. Function receives the event object 'e' automatically
  function handleSearchInput(e) {
    console.log("User typed:", e.target.value);
  }
 return (

         <div className="min-h-screen bg-slate-950 text-white p-8 flex flex-col items-center justify-center gap-6">
      
      {/* Piece 1: Plain Click */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl max-w-sm w-full text-center">
        <h2 className="text-xl font-bold mb-4">Server Monitor</h2>
        <button
          onClick={handleSystemPing}
          className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-4 py-2 rounded-lg transition w-full"
        >
          Check Server Status
        </button>
      </div>

      {/* Piece 3: Live Input Event */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl max-w-sm w-full">
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          Search Live Courses
        </label>
        <input
          type="text"
          placeholder="Type here (check DevTools console)..."
          onChange={handleSearchInput}
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition"
        />
      </div>

      {/* Piece 2: Dynamic Arguments */}
      <div className="flex gap-4 flex-col sm:flex-row">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl w-64">
          <h3 className="font-bold text-lg mb-1">Spring Boot 3</h3>
          <p className="text-slate-400 text-sm mb-4">Price: ₹1,499</p>
          <button
            onClick={() => handleEnroll("Spring Boot 3", "1,499")}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2 rounded-lg text-sm transition"
          >
            Enroll Now
          </button>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl w-64">
          <h3 className="font-bold text-lg mb-1">JWT Security</h3>
          <p className="text-slate-400 text-sm mb-4">Price: ₹999</p>
          <button
            onClick={() => handleEnroll("JWT Security", "999")}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2 rounded-lg text-sm transition"
          >
            Enroll Now
          </button>
        </div>
      </div>

    </div>
  )
}

export default App;