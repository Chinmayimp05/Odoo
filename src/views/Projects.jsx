import React, { useState } from 'react';
import { Search, Settings, MoreHorizontal, Plus, Sun, Moon, User } from 'lucide-react';

export default function Projects() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: 'UI Services',
      type: 'Services',
      thumbnail: '/api/placeholder/200/120',
      color: 'bg-purple-100'
    },
    {
      id: 2,
      title: 'Brains',
      type: 'Brains',
      thumbnail: '/api/placeholder/200/120',
      color: 'bg-blue-100'
    },
    {
      id: 3,
      title: 'UI Upgrade',
      type: 'Upgrade',
      thumbnail: '/api/placeholder/200/120',
      color: 'bg-gray-100'
    }
  ];

  const notifications = [
    { id: 1, text: 'notification', checked: true },
    { id: 2, text: 'notification', checked: false },
    { id: 3, text: 'notification', checked: false },
    { id: 4, text: 'notification', checked: true }
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
            <div className={`flex items-center space-x-3 px-3 py-2 text-blue-600 bg-blue-50 rounded-md ${sidebarCollapsed ? 'justify-center' : ''}`}>
              <div className="w-5 h-5 bg-blue-600 rounded"></div>
              {!sidebarCollapsed && <span className="font-medium">Projects</span>}
            </div>
            <div className={`flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md ${sidebarCollapsed ? 'justify-center' : ''}`}>
              <div className="w-5 h-5 bg-gray-400 rounded"></div>
              {!sidebarCollapsed && <span>My Tasks</span>}
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
                <div className="text-xs text-gray-500">test@email</div>
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
              <h1 className="text-2xl font-semibold text-orange-500">Projects View</h1>
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
              
              {/* User/Application Settings */}
              <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                Akash / Application Settings
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Projects</span>
            </div>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              <MoreHorizontal className="w-4 h-4" />
              <span>New Project</span>
            </button>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className={`h-32 ${project.color} relative`}>
                  {/* Project thumbnail/preview would go here */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-500 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{project.type}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-1">
                      <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="text-xs text-gray-400">2 days ago</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500">Cards view showing all the projects</p>
          </div>
        </main>

        {/* Right Sidebar - Notifications */}
        <div className="w-64 bg-white border-l border-gray-200 p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-4">On click of notification icon</h3>
          <div className="space-y-2">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={notification.checked}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                  readOnly
                />
                <span className="text-sm text-gray-700">{notification.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-xs text-gray-500">
            Work on most recent based, the notification panel
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-8">
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Quick Links</h4>
              <div className="space-y-1">
                <div className="h-2 bg-gray-200 rounded w-20"></div>
                <div className="h-2 bg-gray-200 rounded w-16"></div>
                <div className="h-2 bg-gray-200 rounded w-18"></div>
                <div className="h-2 bg-gray-200 rounded w-14"></div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Company</h4>
              <div className="space-y-1">
                <div className="h-2 bg-gray-200 rounded w-24"></div>
                <div className="h-2 bg-gray-200 rounded w-20"></div>
                <div className="h-2 bg-gray-200 rounded w-22"></div>
                <div className="h-2 bg-gray-200 rounded w-18"></div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Connect with us</h4>
              <div className="space-y-1">
                <div className="h-2 bg-gray-200 rounded w-26"></div>
                <div className="h-2 bg-gray-200 rounded w-22"></div>
                <div className="h-2 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}