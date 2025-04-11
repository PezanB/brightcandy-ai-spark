
import { 
  BarChart3, Clock, LineChart, Shuffle, Zap, Users,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock size={24} className="text-teal-500" />,
      title: "Real-Time Decision Making",
      description: "Transform data into actionable insights instantly as conditions change."
    },
    {
      icon: <LineChart size={24} className="text-teal-500" />,
      title: "Strategic KPI Alignment",
      description: "Connect high-level objectives to day-to-day operational decisions."
    },
    {
      icon: <Shuffle size={24} className="text-teal-500" />,
      title: "Break Down Silos",
      description: "Foster collaboration across teams with shared insights and goals."
    },
    {
      icon: <Zap size={24} className="text-teal-500" />,
      title: "Boost Workforce Productivity",
      description: "Empower employees with the right information at the right time."
    },
    {
      icon: <BarChart3 size={24} className="text-teal-500" />,
      title: "Measurable Outcomes",
      description: "Track improvements with clear metrics and performance indicators."
    },
    {
      icon: <Users size={24} className="text-teal-500" />,
      title: "Enterprise Experience",
      description: "Built by experts in enterprise operations and AI implementation."
    }
  ];

  return (
    <section id="benefits" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose <span className="gradient-text">BrightCandy.ai</span>
          </h2>
          <p className="text-lg text-gray-600">
            Our platform creates tangible value by connecting strategic vision with day-to-day execution, all powered by advanced AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-brightcandy-dark/40 p-8 rounded-xl shadow-md border border-gray-100 dark:border-brightcandy-dark/60 hover-scale"
            >
              <div className="w-12 h-12 bg-teal-100/60 rounded-lg flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild variant="outline" className="text-teal-500 border-teal-500 gap-2 hover-scale">
            <a href="#contact">
              Explore Our Framework <ArrowUpRight size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
