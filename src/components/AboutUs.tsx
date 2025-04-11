
import { BrainCircuit, Layers, BarChart4 } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-brightcandy-dark/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="gradient-text">BrightCandy.ai</span>
          </h2>
          <p className="text-lg text-gray-600">
            We believe enterprise execution is due for a radical upgrade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              We're building a real-time, AI-powered decision layer that transforms how organizations align strategy with action. Our platform doesn't replace your tools—it makes them smarter. By sitting on top of existing enterprise systems, BrightCandy turns strategic KPIs into intelligent daily decisions across teams, in real time.
            </p>
            <p className="text-lg leading-relaxed">
              Born out of deep enterprise experience in telecom, AI, and operations, our team brings together expertise in optimization, machine learning, and scalable design. We've developed a unique 7-stage analytics framework that bridges silos, boosts workforce productivity, and delivers measurable outcomes.
            </p>
            <p className="text-lg leading-relaxed font-medium">
              BrightCandy.ai is not just another SaaS tool—it's your enterprise's AI brain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-brightcandy-dark/40 p-6 rounded-xl shadow-md hover-scale">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                <BrainCircuit size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Decisions</h3>
              <p className="text-gray-600">Transform strategic goals into actionable insights automatically.</p>
            </div>
            
            <div className="bg-white dark:bg-brightcandy-dark/40 p-6 rounded-xl shadow-md hover-scale">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                <Layers size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
              <p className="text-gray-600">Works with your existing tools and systems without disruption.</p>
            </div>
            
            <div className="bg-white dark:bg-brightcandy-dark/40 p-6 rounded-xl shadow-md hover-scale md:col-span-2">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                <BarChart4 size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Measurable Results</h3>
              <p className="text-gray-600">Track improvements in productivity and decision quality across your organization.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
