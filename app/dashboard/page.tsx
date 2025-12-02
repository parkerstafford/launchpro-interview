'use client';

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  MessageSquare, 
  Calendar,
  Settings,
  Bell,
  Search,
  Plus,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Zap,
  MoreVertical,
  Filter,
  ChevronDown
} from 'lucide-react';

export default function AgentPMDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const projects = [
    { id: 1, name: "Riverside Renovation", client: "John Smith", status: "In Progress", progress: 65, budget: "$125,000", deadline: "2 weeks", priority: "high" },
    { id: 2, name: "Downtown Office Build", client: "ABC Corp", status: "Planning", progress: 20, budget: "$450,000", deadline: "3 months", priority: "medium" },
    { id: 3, name: "Suburban Home Addition", client: "Martinez Family", status: "In Progress", progress: 85, budget: "$75,000", deadline: "5 days", priority: "high" },
    { id: 4, name: "Commercial Remodel", client: "Tech Startup Inc", status: "On Hold", progress: 40, budget: "$200,000", deadline: "6 weeks", priority: "low" }
  ];

  const recentActivity = [
    { id: 1, type: "message", text: "AI sent update to John Smith about Riverside Renovation", time: "5 min ago", icon: <MessageSquare className="w-4 h-4" /> },
    { id: 2, type: "milestone", text: "Foundation inspection completed for Downtown Office", time: "1 hour ago", icon: <CheckCircle className="w-4 h-4" /> },
    { id: 3, type: "schedule", text: "Contractor meeting scheduled for tomorrow", time: "2 hours ago", icon: <Calendar className="w-4 h-4" /> },
    { id: 4, type: "alert", text: "Budget alert: Suburban Home Addition approaching limit", time: "3 hours ago", icon: <AlertCircle className="w-4 h-4" /> }
  ];

  const stats = [
    { label: "Active Projects", value: "12", change: "+2", icon: <Briefcase className="w-6 h-6" />, color: "blue" },
    { label: "Total Revenue", value: "$1.2M", change: "+15%", icon: <DollarSign className="w-6 h-6" />, color: "green" },
    { label: "Active Clients", value: "28", change: "+5", icon: <Users className="w-6 h-6" />, color: "purple" },
    { label: "AI Messages Sent", value: "342", change: "+89", icon: <Zap className="w-6 h-6" />, color: "cyan" }
  ];

  const upcomingTasks = [
    { id: 1, task: "Final walkthrough - Riverside Renovation", due: "Today, 2:00 PM", priority: "high" },
    { id: 2, task: "Submit permits for Downtown Office", due: "Tomorrow, 10:00 AM", priority: "high" },
    { id: 3, task: "Client meeting - Martinez Family", due: "Dec 5, 3:00 PM", priority: "medium" },
    { id: 4, task: "Review contractor bids", due: "Dec 6, 5:00 PM", priority: "low" }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case "In Progress": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Planning": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "On Hold": return "bg-red-500/20 text-red-300 border-red-500/30";
      case "Completed": return "bg-green-500/20 text-green-300 border-green-500/30";
      default: return "bg-slate-500/20 text-slate-300 border-slate-500/30";
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case "high": return "bg-red-500";
      case "medium": return "bg-yellow-500";
      case "low": return "bg-green-500";
      default: return "bg-slate-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-slate-900/50 backdrop-blur-xl border-r border-white/10 transition-all duration-300 flex flex-col`}>
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            {sidebarOpen && <span className="text-xl font-bold text-white">AgentPM™</span>}
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'overview', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Overview' },
            { id: 'projects', icon: <Briefcase className="w-5 h-5" />, label: 'Projects' },
            { id: 'clients', icon: <Users className="w-5 h-5" />, label: 'Clients' },
            { id: 'messages', icon: <MessageSquare className="w-5 h-5" />, label: 'Messages' },
            { id: 'calendar', icon: <Calendar className="w-5 h-5" />, label: 'Calendar' },
            { id: 'settings', icon: <Settings className="w-5 h-5" />, label: 'Settings' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg'
                  : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              {item.icon}
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg p-4">
            {sidebarOpen && (
              <>
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-semibold text-white">AI Credits</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">2,450</div>
                <div className="text-xs text-slate-300">Renews in 12 days</div>
              </>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-slate-900/30 backdrop-blur-xl border-b border-white/10 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-slate-300 hover:text-white">
                <LayoutDashboard className="w-6 h-6" />
              </button>
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search projects, clients, tasks..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3 bg-white/5 rounded-lg px-4 py-2 border border-white/10">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-semibold">
                  JD
                </div>
                <div>
                  <div className="text-sm font-medium text-white">John Doe</div>
                  <div className="text-xs text-slate-400">Admin</div>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-400 rounded-lg flex items-center justify-center`}>
                    {stat.icon}
                  </div>
                  <div className="flex items-center space-x-1 text-green-400 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>{stat.change}</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Active Projects */}
            <div className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white">Active Projects</h2>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                      <Filter className="w-5 h-5 text-slate-300" />
                    </button>
                    <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 hover:shadow-lg transition-all">
                      <Plus className="w-4 h-4" />
                      <span>New Project</span>
                    </button>
                  </div>
                </div>
                <div className="divide-y divide-white/10">
                  {projects.map((project) => (
                    <div key={project.id} className="p-6 hover:bg-white/5 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                              {project.status}
                            </span>
                          </div>
                          <p className="text-sm text-slate-400 mb-3">Client: {project.client}</p>
                          <div className="flex items-center space-x-6 text-sm">
                            <div className="flex items-center space-x-2">
                              <DollarSign className="w-4 h-4 text-slate-400" />
                              <span className="text-slate-300">{project.budget}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-slate-400" />
                              <span className="text-slate-300">{project.deadline}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className={`w-2 h-2 rounded-full ${getPriorityColor(project.priority)}`}></div>
                              <span className="text-slate-300 capitalize">{project.priority} Priority</span>
                            </div>
                          </div>
                        </div>
                        <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                          <MoreVertical className="w-5 h-5 text-slate-400" />
                        </button>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Progress</span>
                          <span className="text-white font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-700/50 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Content */}
            <div className="space-y-6">
              {/* Upcoming Tasks */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                <div className="p-6 border-b border-white/10">
                  <h2 className="text-xl font-bold text-white">Upcoming Tasks</h2>
                </div>
                <div className="divide-y divide-white/10">
                  {upcomingTasks.map((task) => (
                    <div key={task.id} className="p-4 hover:bg-white/5 transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className={`w-1 h-1 rounded-full mt-2 ${getPriorityColor(task.priority)}`}></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-white mb-1">{task.task}</p>
                          <p className="text-xs text-slate-400">{task.due}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                <div className="p-6 border-b border-white/10">
                  <h2 className="text-xl font-bold text-white">Recent Activity</h2>
                </div>
                <div className="divide-y divide-white/10">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="p-4 hover:bg-white/5 transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0">
                          {activity.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-slate-300 mb-1">{activity.text}</p>
                          <p className="text-xs text-slate-500">{activity.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}