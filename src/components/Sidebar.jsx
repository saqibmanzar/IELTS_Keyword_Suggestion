import React from 'react';
import { Home, Book, MessageSquare, Menu } from 'lucide-react';
import Button from './Button';

const Sidebar = ({ isSidebarOpen, toggleSidebar, setActiveScreen, isProcessed }) => {
  return (
    <aside className={`${isSidebarOpen ? 'w-64' : 'w-16'} bg-indigo-600 text-white transition-all duration-300 ease-in-out`}>
      <div className="p-4">
        <Button variant="ghost" className="w-full justify-center mb-4" onClick={toggleSidebar}>
          <Menu className="h-6 w-6" />
        </Button>
        <nav>
          <ul>
            <li className="mb-2">
              <Button
                variant="ghost"
                className={`w-full ${isSidebarOpen ? 'justify-start' : 'justify-center'}`}
                onClick={() => setActiveScreen('home')}
              >
                <Home className="h-5 w-5" />
                {isSidebarOpen && <span className="ml-2">Home</span>}
              </Button>
            </li>
            {isProcessed && (
              <>
                <li className="mb-2">
                  <Button
                    variant="ghost"
                    className={`w-full ${isSidebarOpen ? 'justify-start' : 'justify-center'}`}
                    onClick={() => setActiveScreen('vocabulary')}
                  >
                    <Book className="h-5 w-5" />
                    {isSidebarOpen && <span className="ml-2">Vocabulary</span>}
                  </Button>
                </li>
                <li className="mb-2">
                  <Button
                    variant="ghost"
                    className={`w-full ${isSidebarOpen ? 'justify-start' : 'justify-center'}`}
                    onClick={() => setActiveScreen('answers')}
                  >
                    <MessageSquare className="h-5 w-5" />
                    {isSidebarOpen && <span className="ml-2">Answers</span>}
                  </Button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

