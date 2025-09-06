import React, { useState } from 'react';
import { Search, Settings, MoreHorizontal, Plus, Sun, Moon, User, ArrowLeft } from 'lucide-react';

export default function ProjectTask({ selectedProject, selectedTask, onBack }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const taskItems = [
    {
      id: 1,
      title: 'Frontend Components',
      description: 'Build reusable UI components',
      color: 'bg-purple-100',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Backend Integration', 
      description: 'Connect APIs and database',
      color: 'bg-blue-100',
      status: 'Active'
    },
    {
      id: 3,
      title: 'Testing Suite',
      description: 'Implement automated tests',
      color: 'bg-green-100', 
      status: 'Active'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-white border-r border-gray-200 flex flex-col transition-all duration-300`}>
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed && (
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
                <span className="font-medium text-gray-900">Company</span>
              </div>
            )}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1 rounded-md hover:bg-gray-100"
            >
              <div className="w-4 h-4 border border-gray-400 rounded"></div>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <div 
              onClick={onBack}
              className={`flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer ${sidebarCollapsed ? 'justify-center' : ''}`}
            >
              <div className="w-5 h-5 bg-gray-400 rounded"></div>
              {!sidebarCollapsed && <span>Projects</span>}
            </div>
            <div className={`flex items-center space-x-3 px-3 py-2 text-blue-600 bg-blue-50 rounded-md ${sidebarCollapsed ? 'justify-center' : ''}`}>
              <div className="w-5 h-5 bg-blue-600 rounded"></div>
              {!sidebarCollapsed && <span className="font-medium">My Tasks</span>}
            </div>
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-4">
            <Sun className="w-5 h-5 text-gray-400" />
            <Moon className="w-5 h-5 text-gray-400" />
          </div>
          {!sidebarCollapsed && (
            <div className="mt-4 flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Test User</div>
                <div className="text-xs text-gray-500">user@email</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-semibold text-orange-500">
                Tasks inside a Project View
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              {/* Settings */}
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="w-5 h-5" />
              </button>
              
              {/* User Settings */}
              <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                User Settings
              </button>
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200 px-6 py-2">
          <div className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 inline-block">
            Bread crumb links for navigation
          </div>
        </div>

        {/* Content Area */}
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <button 
                onClick={onBack}
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Projects</span>
              </button>
              {selectedProject && (
                <>
                  <span className="text-gray-400"></span>
                  <span>{selectedProject.title}</span>
                </>
              )}
              {selectedTask && (
                <>
                  <span className="text-gray-400"></span>
                  <span>{selectedTask.title}</span>
                </>
              )}
            </div>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              <MoreHorizontal className="w-4 h-4" />
              <span>Add Task Item</span>
            </button>
          </div>

          {/* Task Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {taskItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className={`h-32 ${item.color} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-2 w-24 h-20">
                      {/* Task item visualization */}
                      <div className="w-6 h-6 bg-purple-500 rounded"></div>
                      <div className="w-6 h-6 bg-purple-700 rounded-full"></div>
                      <div className="w-6 h-6 bg-blue-500 rounded"></div>
                      <div className="w-6 h-6 bg-green-500 rounded"></div>
                      <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-red-500 rounded"></div>
                      <div className="w-6 h-6 bg-indigo-500 rounded"></div>
                      <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-cyan-500 rounded"></div>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 text-xs rounded-full text-white bg-green-500">
                      {item.status}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-1">
                      <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="text-xs text-gray-400">1 day ago</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State Message */}
          <div className="mt-12 text-center">
            <div className="text-gray-400 text-lg mb-2">📋</div>
            <p className="text-gray-500">Task items view showing detailed breakdown</p>
            <p className="text-sm text-gray-400 mt-1">Click "Add Task Item" to create new items</p>
          </div>
        </main>
      </div>
    </div>
  );
}