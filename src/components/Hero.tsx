import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -right-40 w-96 h-96 bg-teal-300/30 rounded-full blur-3xl" />
        <div className="absolute -left-40 top-40 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The AI-Powered <span className="teal-gradient-text">Decision Layer</span> For Enterprise Excellence
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Transform how your organization aligns strategy with action. BrightCandy.ai turns your KPIs into intelligent decisions across teams, in real time.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="teal-gradient-bg text-lg gap-2 hover-scale"
                onClick={scrollToContact}
              >
                Schedule a Demo <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-teal-500 text-teal-600 gap-2 hover-scale">
                Explore Solutions <Sparkles size={18} />
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-teal-600/20 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-white dark:bg-brightcandy-dark/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 transform -rotate-3 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-400 to-teal-600"></div>
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-teal-400/10 h-20 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-teal-400/30"></div>
                    </div>
                    <div className="bg-teal-600/10 h-20 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-teal-600/30"></div>
                    </div>
                    <div className="bg-teal-300/10 h-20 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-teal-300/30"></div>
                    </div>
                    <div className="bg-teal-200/10 h-20 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-teal-200/30"></div>
                    </div>
                  </div>
                  <div className="mt-auto flex justify-end">
                    <div className="h-10 w-1/2 gradient-bg rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
