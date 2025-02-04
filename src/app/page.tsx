import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white flex flex-col items-center p-8">
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center mb-20">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          loginAuth
        </div>
        <button className="px-6 py-2 rounded-lg bg-[#252525]/50 hover:bg-[#303030] backdrop-blur-sm transition-all duration-300 border border-white/10">
          About
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center text-center max-w-md w-full relative">
        <div className="absolute -top-32 -z-10 w-full h-[500px] bg-gradient-to-b from-blue-500/20 to-purple-500/20 blur-[120px] rounded-full"></div>
        
        <h1 className="text-7xl font-light mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          Login Auth
        </h1>
        <p className="text-gray-400 mb-12 text-lg">
          👨🏽‍💻 powered by thealphagram + javascript ✨🤪.
        </p>

        {/* Login Card */}
        <div className="w-full bg-[#1A1A1A]/70 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/[0.05] relative">
          <h2 className="text-xl mb-8 font-medium">Sign in AlphaApp</h2>
          
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-4 rounded-xl bg-[#252525]/50 border border-white/[0.05] focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/25 transition-all duration-300"
              />
            </div>
            
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl hover:opacity-90 transition-all duration-300 font-medium shadow-lg shadow-blue-500/25">
              Continue
            </button>

            <div className="text-center text-gray-500 my-4 flex items-center gap-4 before:flex-1 before:h-px before:bg-white/[0.05] after:flex-1 after:h-px after:bg-white/[0.05]">
              OR
            </div>

            <button className="w-full bg-[#252525]/50 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-[#303030]/50 transition-all duration-300 border border-white/[0.05]">
              <Image
                src="/images/github.jpg"
                alt="Github logo"
                width={20}
                height={20}
                className="rounded-full"
              />
              Continue with Github
            </button>

            <button className="w-full bg-[#252525]/50 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-[#303030]/50 transition-all duration-300 border border-white/[0.05]">
              <Image
                src="/images/google.jpg"
                alt="Google logo"
                width={20}
                height={20}
                className="rounded-full"
              />
              Continue with Google
            </button>

            <p className="text-sm text-gray-400 mt-6">
              Dont have an account?{" "}
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </main>

      {/* Theme Toggle */}
      <div className="mt-16 flex gap-2 bg-[#1A1A1A]/50 p-1 rounded-full backdrop-blur-sm border border-white/[0.05]">
        <button className="p-2 rounded-full bg-[#252525]/50 hover:bg-[#303030]/50 transition-all duration-300">
          <Image
            src="/images/github.jpg"
            alt="Dark mode"
            width={20}
            height={20}
            className="rounded-full"
          />
        </button>
        <button className="p-2 rounded-full hover:bg-[#252525]/50 transition-all duration-300">
          <Image
            src="/images/google.jpg"
            alt="Light mode"
            width={20}
            height={20}
            className="rounded-full"
          />
        </button>
      </div>
    </div>
  );
}
