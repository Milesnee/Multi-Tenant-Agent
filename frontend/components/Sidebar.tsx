import React from 'react';
import { LayoutDashboard, TrendingUp, Shield, FolderKanban, Bot, TerminalSquare, Coins } from 'lucide-react';
import { ViewState } from '../types';

interface SidebarProps {
    currentView: ViewState;
    onViewChange: (view: ViewState) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
    const navItems = [
        { id: ViewState.OVERVIEW, label: 'Architecture Overview', icon: LayoutDashboard },
        { id: ViewState.HERMES_INTEGRATION, label: 'Hermes Agent Engine', icon: TerminalSquare },
        { id: ViewState.MONETIZATION, label: 'Token & API Mgmt', icon: Coins },
        { id: ViewState.SCALABILITY, label: 'Elastic Scalability', icon: TrendingUp },
        { id: ViewState.ISOLATION, label: 'Multi-Tenant Isolation', icon: Shield },
        { id: ViewState.WORKSPACE_DEMO, label: 'User Workspace Demo', icon: FolderKanban },
    ];

    return (
        <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col h-screen sticky top-0">
            <div className="p-6 flex items-center gap-3 border-b border-slate-800">
                <div className="bg-primary p-2 rounded-lg">
                    <Bot size={24} className="text-white" />
                </div>
                <h1 className="text-lg font-bold text-white leading-tight">AgentOS<br/><span className="text-xs text-slate-400 font-normal">Architecture Blueprint</span></h1>
            </div>
            
            <nav className="flex-1 py-6 px-3 space-y-1">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = currentView === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => onViewChange(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 text-left ${
                                isActive 
                                ? 'bg-primary/10 text-primary font-medium' 
                                : 'hover:bg-slate-800 hover:text-white'
                            }`}
                        >
                            <Icon size={20} className={isActive ? 'text-primary' : 'text-slate-400'} />
                            {item.label}
                        </button>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-800 text-xs text-slate-500">
                System Design Proposal v2.0
            </div>
        </aside>
    );
};
