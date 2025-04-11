
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brightcandy-purpleLight/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brightcandy-softPink/20 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Enterprise?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with our team to schedule a demo and discover how BrightCandy.ai can revolutionize your organization's decision-making process.
            </p>
          </div>
          
          <div className="bg-white dark:bg-brightcandy-dark/40 rounded-xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Contact Form */}
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input 
                      name="name"
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <Input 
                      name="email"
                      type="email" 
                      placeholder="Your Email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <Input 
                      name="company"
                      placeholder="Company Name" 
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <Textarea 
                      name="message"
                      placeholder="How can we help you?" 
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="border-gray-300 resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full gradient-bg gap-2">
                    Send Message <ArrowRight size={16} />
                  </Button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="gradient-bg p-8 md:p-12 text-white flex flex-col">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:info@brightcandy.ai" className="hover:underline">info@brightcandy.ai</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+18005551234" className="hover:underline">+1 (800) 555-1234</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <address className="not-italic">
                        123 AI Boulevard<br />
                        San Francisco, CA 94105
                      </address>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p>Monday - Friday: 9AM - 5PM PST</p>
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="font-medium text-lg">Connect with us:</p>
                  <div className="flex gap-4 mt-2">
                    <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
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

export default ContactCTA;
