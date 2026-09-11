function App() {
  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#111111]">

      {/* ================= NAVBAR ================= */}
      <nav className="bg-[#F7F6F2] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Logo */}
          <div className="text-2xl font-black tracking-tight">
            FIT<span className="text-[#FF5A1F]">BRAND</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a
              href="#"
              className="hover:text-[#FF5A1F] transition"
            >
              Shop
            </a>

            <a
              href="#"
              className="hover:text-[#FF5A1F] transition"
            >
              About
            </a>

            <a
              href="#"
              className="hover:text-[#FF5A1F] transition"
            >
              Quality
            </a>

            <a
              href="#"
              className="hover:text-[#FF5A1F] transition"
            >
              FAQ
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <button
              type="button"
              className="text-lg hover:text-[#FF5A1F] transition"
            >
              👤
            </button>

            <button
              type="button"
              className="text-lg hover:text-[#FF5A1F] transition"
            >
              🛍️
            </button>
          </div>

        </div>
      </nav>


      {/* ================= ANNOUNCEMENT BAR ================= */}
      <div className="bg-[#111111] text-white text-center py-3 px-4 text-xs">
        🇮🇳 Made in India · Free delivery above ₹399 · 3rd-party tested ·
        Use{" "}
        <span className="text-[#FF5A1F] font-bold">
          FIRST15
        </span>{" "}
        for 15% off
      </div>


      {/* ================= HERO SECTION ================= */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Hero Text */}
          <div>

            <p className="text-xs md:text-sm tracking-[0.2em] text-gray-500 font-semibold mb-6">
              SPORTS NUTRITION · INDIA
            </p>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">

              BUILT
              <br />

              FOR YOUR
              <br />

              <span className="text-[#FF5A1F]">
                NEXT LEVEL.
              </span>

            </h1>

            <p className="mt-8 max-w-lg text-base md:text-lg text-gray-500 leading-relaxed">
              Science-backed nutrition for Indian athletes.
              Every batch third-party tested. Every label 100% honest.
            </p>

            <button
              type="button"
              className="mt-8 bg-[#FF5A1F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#e94d16] transition"
            >
              Shop Now →
            </button>

          </div>


          {/* Hero Image */}
          <div className="relative">

            <div className="rounded-[28px] overflow-hidden bg-gray-200">

              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85"
                alt="Fitness training"
                className="w-full h-[500px] object-cover"
              />

            </div>

            {/* Rating Card */}
            <div className="absolute top-5 right-5 bg-white rounded-2xl px-5 py-4 shadow-lg">

              <div className="text-2xl font-bold">
                4.8
                <span className="text-[#FF5A1F]">
                  ★
                </span>
              </div>

              <p className="text-xs text-gray-500">
                average rating
              </p>

            </div>

          </div>

        </div>

      </main>


      {/* ================= SHOP BY GOAL ================= */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <p className="text-xs tracking-[0.2em] text-gray-500 font-semibold mb-3">
            FIND YOUR FIT
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-10">
            SHOP BY GOAL
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* Goal 1 */}
            <div className="bg-[#F7F6F2] rounded-2xl p-7 h-52 flex flex-col justify-between hover:bg-[#FF5A1F] hover:text-white transition cursor-pointer">

              <span className="text-4xl">
                💪
              </span>

              <div>
                <h3 className="font-bold text-xl">
                  Muscle & Strength
                </h3>

                <p className="text-sm opacity-60 mt-2">
                  Protein & performance
                </p>
              </div>

            </div>


            {/* Goal 2 */}
            <div className="bg-[#F7F6F2] rounded-2xl p-7 h-52 flex flex-col justify-between hover:bg-[#FF5A1F] hover:text-white transition cursor-pointer">

              <span className="text-4xl">
                ⚡
              </span>

              <div>
                <h3 className="font-bold text-xl">
                  Energy & Performance
                </h3>

                <p className="text-sm opacity-60 mt-2">
                  Fuel your workouts
                </p>
              </div>

            </div>


            {/* Goal 3 */}
            <div className="bg-[#F7F6F2] rounded-2xl p-7 h-52 flex flex-col justify-between hover:bg-[#FF5A1F] hover:text-white transition cursor-pointer">

              <span className="text-4xl">
                🔄
              </span>

              <div>
                <h3 className="font-bold text-xl">
                  Recovery
                </h3>

                <p className="text-sm opacity-60 mt-2">
                  Recover & rebuild
                </p>
              </div>

            </div>


            {/* Goal 4 */}
            <div className="bg-[#F7F6F2] rounded-2xl p-7 h-52 flex flex-col justify-between hover:bg-[#FF5A1F] hover:text-white transition cursor-pointer">

              <span className="text-4xl">
                🌱
              </span>

              <div>
                <h3 className="font-bold text-xl">
                  Daily Wellness
                </h3>

                <p className="text-sm opacity-60 mt-2">
                  Everyday nutrition
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BESTSELLERS ================= */}
      <section className="bg-[#F7F6F2] py-20">

        <div className="max-w-7xl mx-auto px-6">

          {/* Section Heading */}
          <div className="flex items-end justify-between mb-10">

            <div>

              <p className="text-xs tracking-[0.2em] text-gray-500 font-semibold mb-3">
                OUR TOP PICKS
              </p>

              <h2 className="text-4xl md:text-5xl font-black">
                BESTSELLERS
              </h2>

            </div>

            <a
              href="#"
              className="hidden md:block text-sm font-semibold hover:text-[#FF5A1F] transition"
            >
              Shop all →
            </a>

          </div>


          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


            {/* ================= PRODUCT 1 ================= */}
            <div className="group">

              <div className="relative bg-white rounded-2xl overflow-hidden h-80 flex items-center justify-center">

                <img
                  src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=800&q=85"
                  alt="Protein supplement"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-[#FF5A1F] text-white text-xs font-bold px-3 py-2 rounded-full">
                  BESTSELLER
                </span>

              </div>


              <div className="pt-5">

                <div className="flex justify-between items-start gap-3">

                  <div>

                    <h3 className="font-bold text-lg">
                      Whey Protein
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Premium whey protein
                    </p>

                  </div>

                  <span className="font-bold">
                    ₹1,999
                  </span>

                </div>


                <div className="flex items-center gap-2 mt-3 text-sm">

                  <span className="text-[#FF5A1F]">
                    ★★★★★
                  </span>

                  <span className="text-gray-500">
                    4.8
                  </span>

                </div>


                <button
                  type="button"
                  className="w-full mt-4 border border-[#111111] rounded-full py-3 text-sm font-semibold hover:bg-[#111111] hover:text-white transition"
                >
                  Add to Cart
                </button>

              </div>

            </div>


            {/* ================= PRODUCT 2 ================= */}
            <div className="group">

              <div className="relative bg-white rounded-2xl overflow-hidden h-80 flex items-center justify-center">

                <img
                  src="https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=800&q=85"
                  alt="Pre workout supplement"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-[#111111] text-white text-xs font-bold px-3 py-2 rounded-full">
                  POPULAR
                </span>

              </div>


              <div className="pt-5">

                <div className="flex justify-between items-start gap-3">

                  <div>

                    <h3 className="font-bold text-lg">
                      Pre-Workout
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Energy & focus
                    </p>

                  </div>

                  <span className="font-bold">
                    ₹1,299
                  </span>

                </div>


                <div className="flex items-center gap-2 mt-3 text-sm">

                  <span className="text-[#FF5A1F]">
                    ★★★★★
                  </span>

                  <span className="text-gray-500">
                    4.7
                  </span>

                </div>


                <button
                  type="button"
                  className="w-full mt-4 border border-[#111111] rounded-full py-3 text-sm font-semibold hover:bg-[#111111] hover:text-white transition"
                >
                  Add to Cart
                </button>

              </div>

            </div>


            {/* ================= PRODUCT 3 ================= */}
            <div className="group">

              <div className="relative bg-white rounded-2xl overflow-hidden h-80 flex items-center justify-center">

                <img
                  src="https://images.unsplash.com/photo-1622484212850-eb596d769edc?auto=format&fit=crop&w=800&q=85"
                  alt="Creatine supplement"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

              </div>


              <div className="pt-5">

                <div className="flex justify-between items-start gap-3">

                  <div>

                    <h3 className="font-bold text-lg">
                      Creatine
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Pure creatine monohydrate
                    </p>

                  </div>

                  <span className="font-bold">
                    ₹899
                  </span>

                </div>


                <div className="flex items-center gap-2 mt-3 text-sm">

                  <span className="text-[#FF5A1F]">
                    ★★★★★
                  </span>

                  <span className="text-gray-500">
                    4.9
                  </span>

                </div>


                <button
                  type="button"
                  className="w-full mt-4 border border-[#111111] rounded-full py-3 text-sm font-semibold hover:bg-[#111111] hover:text-white transition"
                >
                  Add to Cart
                </button>

              </div>

            </div>


            {/* ================= PRODUCT 4 ================= */}
            <div className="group">

              <div className="relative bg-white rounded-2xl overflow-hidden h-80 flex items-center justify-center">

                <img
                  src="https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=85"
                  alt="Recovery supplement"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-[#FF5A1F] text-white text-xs font-bold px-3 py-2 rounded-full">
                  NEW
                </span>

              </div>


              <div className="pt-5">

                <div className="flex justify-between items-start gap-3">

                  <div>

                    <h3 className="font-bold text-lg">
                      Recovery Blend
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Post-workout recovery
                    </p>

                  </div>

                  <span className="font-bold">
                    ₹1,499
                  </span>

                </div>


                <div className="flex items-center gap-2 mt-3 text-sm">

                  <span className="text-[#FF5A1F]">
                    ★★★★★
                  </span>

                  <span className="text-gray-500">
                    4.8
                  </span>

                </div>


                <button
                  type="button"
                  className="w-full mt-4 border border-[#111111] rounded-full py-3 text-sm font-semibold hover:bg-[#111111] hover:text-white transition"
                >
                  Add to Cart
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-[#111111] text-white py-12">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row justify-between gap-8">

            <div>

              <div className="text-2xl font-black">
                FIT<span className="text-[#FF5A1F]">
                  BRAND
                </span>
              </div>

              <p className="text-gray-400 text-sm mt-3 max-w-sm">
                Science-backed sports nutrition built for your next level.
              </p>

            </div>


            <div className="flex gap-8 text-sm text-gray-400">

              <a
                href="#"
                className="hover:text-white transition"
              >
                Instagram
              </a>

              <a
                href="#"
                className="hover:text-white transition"
              >
                Facebook
              </a>

              <a
                href="#"
                className="hover:text-white transition"
              >
                Contact
              </a>

            </div>

          </div>


          <div className="border-t border-gray-800 mt-10 pt-6 text-xs text-gray-500">
            © 2026 FitBrand. All rights reserved.
          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;