import {
  MoreHorizontal,
  ArrowUp,
  ArrowDown,
  MessageSquare,
  Share2,
  Badge,
} from "lucide-react";

const Card = () => {
  return (
    <>
      <div className="max-w-xl w-full m-3 card border rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-slate-700">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="https://picsum.photos/id/64/64/64"
                  alt="Alex Innovator"
                  className="w-10 h-10 rounded-full border-2 border-slate-700 object-cover"
                />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-slate-100 font-semibold text-base">
                    Alex Innovator
                  </h3>
                  <span className="text-slate-500 text-xs">•</span>
                  <span className="text-slate-500 text-xs font-medium">
                    2h ago
                  </span>
                </div>
                <div className="text-blue-500 font-bold text-[10px] tracking-wider uppercase mt-0.5">
                  #ID-1024
                </div>
              </div>
            </div>
            <button className="text-slate-400 hover:text-white transition-colors p-1 rounded-full hover:bg-slate-800">
              <MoreHorizontal size={20} />
            </button>
          </div>

          {/* Content Section */}
          <div className="mt-5 space-y-3">
            <h2 className="text-white text-2xl font-bold leading-tight">
              Decentralized Urban Farming Grid
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              A proposal to utilize empty rooftop spaces in metro areas for
              automated hydroponic pods. This would reduce food miles and
              provide fresh produce directly to local communities. The grid
              would be managed via a DAO.
            </p>
          </div>
        </div>

        {/* Featured Image */}
        <div className="px-6 relative">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-800/50">
            <img
              src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=1000"
              alt="Urban Farming Concept"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 right-3">
              <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold text-slate-100 tracking-wide border border-white/10 uppercase">
                Concept Art
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="px-6 py-4 flex flex-wrap gap-2">
          <Badge values="Sustainability" />
          <Badge>Tech</Badge>
        </div>

        {/* Footer / Interaction Bar */}
        <div className="px-6 pb-6 pt-2">
          <div className="h-px bg-slate-800 mb-6" />
          <div className="flex items-center justify-between">
            <div className="flex items-center bg-[#1e293b]/50 rounded-xl p-1 border border-slate-800">
              <div className="p-2 rounded-lg text-slate-400">
                <ArrowUp size={18} />
              </div>
              <span className="px-3 text-slate-200 font-bold text-sm min-w-[3rem] text-center">
                1.2k
              </span>
              <div className="w-[1px] h-4 bg-slate-700" />
              <div className="p-2 rounded-lg text-slate-400">
                <ArrowDown size={18} />
              </div>
            </div>

            <div className="flex items-center space-x-1 sm:space-x-4">
              <button className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors px-3 py-2 rounded-xl hover:bg-slate-800/50">
                <MessageSquare size={18} />
                <span className="text-sm font-semibold">45 Critiques</span>
              </button>
              <button className="p-2 text-slate-400 hover:text-white transition-all hover:bg-slate-800/50 rounded-xl">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
