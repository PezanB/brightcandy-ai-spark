
import { useState } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Framework = () => {
  const [activeStage, setActiveStage] = useState(0);
  
  const stages = [
    {
      number: "01",
      title: "Data Collection",
      description: "Integrate with your existing systems to gather relevant data across your organization."
    },
    {
      number: "02",
      title: "Pattern Recognition",
      description: "Our AI identifies patterns and trends in your operational data that humans might miss."
    },
    {
      number: "03",
      title: "Strategic Mapping",
      description: "Connect identified patterns to your strategic KPIs and business objectives."
    },
    {
      number: "04",
      title: "Decision Formulation",
      description: "Generate actionable decisions based on real-time data and strategic goals."
    },
    {
      number: "05",
      title: "Impact Simulation",
      description: "Model the potential outcomes of decisions before implementation."
    },
    {
      number: "06",
      title: "Execution Support",
      description: "Provide teams with clear guidance on implementing decisions."
    },
    {
      number: "07",
      title: "Continuous Learning",
      description: "Monitor outcomes and refine decision models based on real-world results."
    }
  ];

  return (
    <section id="framework" className="section-padding bg-gray-50 dark:bg-brightcandy-dark/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 -right-20 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-100/20 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our 7-Stage <span className="gradient-text">Analytics Framework</span>
          </h2>
          <p className="text-lg text-gray-600">
            A comprehensive approach that transforms data into strategic action through seven carefully designed stages.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Framework Navigation */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="space-y-1">
                {stages.map((stage, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center gap-4",
                      activeStage === index 
                        ? "bg-teal-500 text-white" 
                        : "hover:bg-teal-100/30"
                    )}
                    onClick={() => setActiveStage(index)}
                  >
                    <span className={cn(
                      "font-mono text-lg font-bold",
                      activeStage === index 
                        ? "text-white" 
                        : "text-teal-500"
                    )}>
                      {stage.number}
                    </span>
                    <div className="text-left">
                      <h3 className="font-medium">{stage.title}</h3>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Framework Content */}
          <div className="lg:w-2/3">
            <div className="bg-white dark:bg-brightcandy-dark/40 shadow-lg rounded-xl p-8 border border-gray-100 dark:border-brightcandy-dark/60">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
                  {stages[activeStage].number}
                </div>
                <h3 className="text-2xl font-bold">{stages[activeStage].title}</h3>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                {stages[activeStage].description}
              </p>
              
              <div className="aspect-video bg-gray-100 dark:bg-brightcandy-dark/60 rounded-lg mb-8 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-500/20 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-teal-500/40"></div>
                    </div>
                    <p className="text-gray-400">Interactive visualization for {stages[activeStage].title}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" className="hover-scale">
                  Learn More
                </Button>
                <Button asChild className="gradient-bg hover-scale">
                  <a href="#contact">Schedule a Demo</a>
                </Button>
              </div>
            </div>
            
            <div className="mt-6 flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => setActiveStage((prev) => (prev === 0 ? stages.length - 1 : prev - 1))}
                className="border-teal-500 text-teal-500"
              >
                Previous Stage
              </Button>
              <Button 
                variant="outline"
                onClick={() => setActiveStage((prev) => (prev === stages.length - 1 ? 0 : prev + 1))}
                className="border-teal-500 text-teal-500"
              >
                Next Stage
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Framework;
