import React from 'react';
import { ArrowRight, CheckCircle, Zap, MessageSquare, Calendar, Users, BarChart3, Clock } from 'lucide-react';

export default function AgentPMLanding() {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Automated Communication",
      description: "AI-powered messaging keeps clients updated automatically throughout every project phase"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Scheduling",
      description: "Coordinate contractors, inspections, and milestones without the back-and-forth"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Project Tracking",
      description: "Real-time dashboards show project status, budgets, and timelines at a glance"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Management",
      description: "Centralize all client information, preferences, and project history in one place"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Workflow Automation",
      description: "Eliminate repetitive tasks with intelligent workflows that run on autopilot"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time Savings",
      description: "Save 15+ hours per week on administrative tasks and focus on what matters"
    }
  ];

  const benefits = [
    "Reduce client follow-ups by 80%",
    "Never miss a project deadline",
    "Instant project status updates",
    "Automated invoice reminders",
    "Seamless team collaboration",
    "Professional client portal"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-blue-500/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">AgentPM™</span>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full">
              <span className="text-blue-300 text-sm font-semibold">AI-Powered Project Management</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Automate Your Construction Business with{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                AI Intelligence
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Help contractors, builders, and real estate professionals automate communication, 
              project management, and client workflows using AI + automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center group">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 px-6 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">80%</div>
              <div className="text-slate-300">Less Admin Work</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-slate-300">Hours Saved Weekly</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">99%</div>
              <div className="text-slate-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything You Need to Run Projects Smoothly
            </h2>
            <p className="text-xl text-slate-300">Powerful features designed for construction professionals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Construction Pros Choose AgentPM™
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Join hundreds of contractors and builders who have transformed their business operations
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <span className="text-lg text-slate-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-20 h-20 text-cyan-400 mx-auto mb-4" />
                  <p className="text-slate-300">Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Start your free trial today. No credit card required.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-10 py-5 rounded-lg font-semibold text-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 inline-flex items-center group">
            Get Started Free
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">AgentPM™</span>
          </div>
          <p className="text-slate-400">
            © 2025 AgentPM. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}