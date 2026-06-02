export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-6">
            <div className="max-w-lg text-center">
                <h1 className="text-8xl sm:text-9xl font-black tracking-tight text-black">
                    404
                </h1>

                <div className="w-20 h-1 bg-black mx-auto my-6 rounded-full" />

                <h2 className="text-2xl sm:text-3xl font-bold text-black">
                    Page Not Found
                </h2>

                <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                    Sorry, the page you're looking for doesn't exist or has been
                    moved.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                        href="/"
                        className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:opacity-90 transition"
                    >
                        Go Home
                    </a>

                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-3 border border-black text-black rounded-lg font-medium hover:bg-black hover:text-white transition"
                    >
                        Go Back
                    </button>
                </div>

                <div className="mt-12 text-gray-300 text-xs tracking-[0.3em] uppercase">
                    Error • Not Found
                </div>
            </div>
        </div>
    );
}
