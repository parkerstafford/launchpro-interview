'use client';

import React, { useState } from 'react';
import { 
  Zap, 
  MessageSquare, 
  Send,
  Bot,
  Settings,
  ToggleLeft,
  ToggleRight,
  Clock,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Users,
  Mail,
  Calendar,
  FileText,
  RefreshCw,
  Plus,
  Edit3,
  Trash2,
  Play,
  Pause,
  BarChart3,
  ArrowLeft
} from 'lucide-react';

export default function AIAssistantPanel() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hello! I'm your AI project assistant. I can help you automate client communications, schedule tasks, generate reports, and manage your projects. What would you like help with today?",
      timestamp: '10:30 AM'
    },
    {
      id: 2,
      type: 'user',
      content: "Send an update to all clients about their project progress",
      timestamp: '10:32 AM'
    },
    {
      id: 3,
      type: 'ai',
      content: "I've prepared personalized progress updates for all 12 active clients. Here's what I'll send:\n\n• Riverside Renovation (John Smith): 65% complete, on schedule\n• Downtown Office (ABC Corp): 20% complete, permit approval pending\n• Suburban Addition (Martinez Family): 85% complete, final walkthrough this week\n\nWould you like me to send these updates now?",
      timestamp: '10:32 AM'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const [automations, setAutomations] = useState([
    {
      id: 1,
      name: 'Weekly Client Updates',
      description: 'Send automated progress reports every Friday at 5 PM',
      status: 'active',
      trigger: 'Schedule',
      lastRun: '2 days ago',
      messagesCount: 48
    },
    {
      id: 2,
      name: 'Invoice Reminders',
      description: 'Remind clients 3 days before payment due date',
      status: 'active',
      trigger: 'Date-based',
      lastRun: '1 day ago',
      messagesCount: 12
    },
    {
      id: 3,
      name: 'Milestone Notifications',
      description: 'Alert clients when project milestones are completed',
      status: 'active',
      trigger: 'Event-based',
      lastRun: '5 hours ago',
      messagesCount: 23
    },
    {
      id: 4,
      name: 'Meeting Confirmations',
      description: 'Send meeting reminders 24 hours in advance',
      status: 'paused',
      trigger: 'Schedule',
      lastRun: '1 week ago',
      messagesCount: 8
    }
  ]);

  const aiStats = [
    { label: 'Messages Sent', value: '342', icon: <MessageSquare className="w-5 h-5" />, color: 'blue' },
    { label: 'Time Saved', value: '15.5h', icon: <Clock className="w-5 h-5" />, color: 'green' },
    { label: 'Active Automations', value: '8', icon: <Zap className="w-5 h-5" />, color: 'purple' },
    { label: 'Response Rate', value: '98%', icon: <TrendingUp className="w-5 h-5" />, color: 'cyan' }
  ];

  const quickActions = [
    { label: 'Send Client Update', icon: <Mail className="w-5 h-5" />, color: 'blue' },
    { label: 'Schedule Meeting', icon: <Calendar className="w-5 h-5" />, color: 'green' },
    { label: 'Generate Report', icon: <FileText className="w-5 h-5" />, color: 'purple' },
    { label: 'Create Task', icon: <Plus className="w-5 h-5" />, color: 'cyan' }
  ];

  const recentAIActions = [
    { action: 'Sent progress update to John Smith', time: '5 min ago', status: 'success' },
    { action: 'Scheduled inspection for Riverside Renovation', time: '1 hour ago', status: 'success' },
    { action: 'Generated weekly status report', time: '2 hours ago', status: 'success' },
    { action: 'Sent invoice reminder to ABC Corp', time: '3 hours ago', status: 'success' }
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: 'user',
        content: inputMessage,
        timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          type: 'ai',
          content: "I'm processing your request. I'll have that information ready for you in just a moment.",
          timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const toggleAutomation = (id: number) => {
    setAutomations(automations.map(auto => 
      auto.id === id 
        ? { ...auto, status: auto.status === 'active' ? 'paused' : 'active' }
        : auto
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors text-slate-300 hover:text-white">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">AI Assistant</h1>
                <p className="text-slate-400">Automate your workflow with intelligent AI</p>
              </div>
            </div>
          </div>
          <button className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
            <Settings className="w-5 h-5 text-slate-300" />
            <span className="text-slate-300">AI Settings</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {aiStats.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-400 rounded-lg flex items-center justify-center text-white`}>
                  {stat.icon}
                </div>
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* AI Chat Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden flex flex-col h-[600px]">
              <div className="p-6 border-b border-white/10 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white">AI Assistant Chat</h2>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400">Online & Ready</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-white transition-colors">
                    <RefreshCw className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        message.type === 'ai' 
                          ? 'bg-gradient-to-br from-blue-500 to-cyan-400' 
                          : 'bg-gradient-to-br from-purple-500 to-pink-400'
                      }`}>
                        {message.type === 'ai' ? (
                          <Bot className="w-5 h-5 text-white" />
                        ) : (
                          <span className="text-white text-sm font-bold">You</span>
                        )}
                      </div>
                      <div>
                        <div className={`rounded-2xl p-4 ${
                          message.type === 'ai'
                            ? 'bg-white/10 border border-white/20'
                            : 'bg-gradient-to-br from-blue-500 to-cyan-400'
                        }`}>
                          <p className="text-white text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                        </div>
                        <div className={`text-xs text-slate-500 mt-1 ${message.type === 'user' ? 'text-right' : ''}`}>
                          {message.timestamp}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="px-6 py-3 border-t border-white/10 bg-white/5">
                <div className="flex items-center space-x-2 overflow-x-auto">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className={`flex items-center space-x-2 px-4 py-2 bg-${action.color}-500/20 border border-${action.color}-500/30 rounded-lg hover:bg-${action.color}-500/30 transition-all whitespace-nowrap`}
                    >
                      {action.icon}
                      <span className="text-sm text-white">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-6 border-t border-white/10">
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask AI to automate a task, send updates, or generate reports..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 p-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                  >
                    <Send className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Automations */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-white/10 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Automations</h3>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <Plus className="w-5 h-5 text-cyan-400" />
                  </button>
                </div>
              </div>
              <div className="divide-y divide-white/10 max-h-[500px] overflow-y-auto">
                {automations.map((automation) => (
                  <div key={automation.id} className="p-4 hover:bg-white/5 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="text-sm font-semibold text-white">{automation.name}</h4>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            automation.status === 'active'
                              ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                              : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                          }`}>
                            {automation.status}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mb-2">{automation.description}</p>
                        <div className="flex items-center space-x-3 text-xs text-slate-500">
                          <span>• {automation.trigger}</span>
                          <span>• {automation.messagesCount} sent</span>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleAutomation(automation.id)}
                        className="ml-2 text-slate-400 hover:text-white transition-colors"
                      >
                        {automation.status === 'active' ? (
                          <Pause className="w-4 h-4" />
                        ) : (
                          <Play className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Last run: {automation.lastRun}</span>
                      <div className="flex items-center space-x-1">
                        <button className="p-1 hover:bg-white/10 rounded transition-colors">
                          <Edit3 className="w-3 h-3 text-slate-400" />
                        </button>
                        <button className="p-1 hover:bg-white/10 rounded transition-colors">
                          <BarChart3 className="w-3 h-3 text-slate-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent AI Actions */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <h3 className="text-lg font-bold text-white">Recent Actions</h3>
              </div>
              <div className="divide-y divide-white/10">
                {recentAIActions.map((action, index) => (
                  <div key={index} className="p-4 hover:bg-white/5 transition-colors">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-300 mb-1">{action.action}</p>
                        <p className="text-xs text-slate-500">{action.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}