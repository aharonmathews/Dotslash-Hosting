export default function Promo() {
    return (
      <div className="relative flex items-center justify-center h-screen bg-black text-white overflow-hidden">
        {/* Concentric Circles */}
        <div className="absolute w-[80vw] h-[80vw]  flex items-center justify-center">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-yellow-500 opacity-50"
              style={{ width: `${(i + 1) * 20}%`, height: `${(i + 1) * 20}%` }}
            ></div>
          ))}
        </div>
  
       {/*Golden Button*/}
        <div className="relative z-10 flex items-center justify-center w-28 h-28 bg-gradient-to-b from-yellow-500 to-yellow-700 rounded-full shadow-lg border border-yellow-400">
          <div className="w-0.5 h-16 bg-black rotate-45"></div>
        </div>
  
        {/* Text*/}
        <div className="absolute bottom-20 text-center w-full px-4">
            <div>
                <h1 className="text-3xl md:text-5xl font-unbounded font-extrabold">
                NOT JUST
                </h1> 
                <h1 className="text-3xl md:text-5xl fond-unbounded font-extrabold">
                    <span className="block md:inline">A <span className="text-yellow-500">FEST</span></span></h1>
               
            </div>
          
            <p className="text-gray-400 mt-3 text-sm md:text-sm max-w-md mx-auto">
            Lorem ipsum dolor sit amet consectetur. Auctor dignissim massa urna dui. Neque et sed tellus cursus posuere.
          </p>
        </div>
      </div>
    );
  }
  