import React from 'react';
import { Server, Database, Globe, Cpu, Layers, Lock, MessageSquare, Coins, TerminalSquare } from 'lucide-react';

export const ArchitectureOverview: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto animate-in fade-in duration-500">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">System Architecture</h2>
                <p className="text-slate-600">A robust, multi-tenant foundation powered by Hermes Agent, designed for commercial scale from 10 to 100,000+ users.</p>
            </div>

            {/* Diagram Container */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-8">
                
                {/* Client Layer */}
                <div className="flex flex-col items-center">
                    <div className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Client Layer</div>
                    <div className="flex gap-4">
                        <div className="bg-slate-100 border border-slate-300 px-6 py-3 rounded-lg flex items-center gap-2 shadow-sm">
                            <Globe size={18} className="text-slate-600"/> Web App (React)
                        </div>
                        <div className="bg-slate-100 border border-slate-300 px-6 py-3 rounded-lg flex items-center gap-2 shadow-sm">
                            <MessageSquare size={18} className="text-slate-600"/> API Clients
                        </div>
                    </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center"><div className="w-px h-8 bg-slate-300"></div></div>

                {/* Gateway Layer */}
                <div className="flex flex-col items-center">
                    <div className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Edge, Gateway & Monetization</div>
                    <div className="bg-indigo-50 border-2 border-indigo-200 w-full max-w-3xl rounded-xl p-4 flex justify-around items-center shadow-sm">
                        <div className="flex flex-col items-center text-indigo-800 text-center">
                            <Lock size={24} className="mb-1"/>
                            <span className="text-sm font-medium">Auth & WAF</span>
                            <span className="text-xs opacity-75">OIDC, DDoS</span>
                        </div>
                        <div className="flex flex-col items-center text-indigo-800 text-center">
                            <Layers size={24} className="mb-1"/>
                            <span className="text-sm font-medium">API Gateway</span>
                            <span className="text-xs opacity-75">Routing, Rate Limits</span>
                        </div>
                        <div className="flex flex-col items-center text-amber-700 text-center bg-amber-100 p-2 rounded-lg border border-amber-300">
                            <Coins size={24} className="mb-1"/>
                            <span className="text-sm font-bold">Token & API Mgmt</span>
                            <span className="text-xs opacity-90">Quota, Billing, Subscriptions</span>
                        </div>
                    </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center"><div className="w-px h-8 bg-slate-300"></div></div>

                {/* Compute Layer */}
                <div className="flex flex-col items-center">
                    <div className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Compute & Orchestration (Kubernetes)</div>
                    <div className="grid grid-cols-3 gap-4 w-full max-w-3xl">
                        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
                            <Server size={28} className="text-blue-600 mb-2"/>
                            <h4 className="font-semibold text-blue-900">Core API Services</h4>
                            <p className="text-xs text-blue-700 mt-1">User Mgmt, Tenant Routing</p>
                        </div>
                        <div className="bg-emerald-50 border-2 border-emerald-500 rounded-xl p-4 flex flex-col items-center text-center shadow-md relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] px-2 py-1 rounded-bl-lg font-bold">HERMES CORE</div>
                            <TerminalSquare size={28} className="text-emerald-700 mb-2"/>
                            <h4 className="font-bold text-emerald-900">Hermes Agent Runners</h4>
                            <p className="text-xs text-emerald-800 mt-1">Stateless workers executing nousresearch/hermes-agent</p>
                        </div>
                        <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
                            <Layers size={28} className="text-purple-600 mb-2"/>
                            <h4 className="font-semibold text-purple-900">Async Workers</h4>
                            <p className="text-xs text-purple-700 mt-1">Background tasks, document parsing</p>
                        </div>
                    </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center"><div className="w-px h-8 bg-slate-300"></div></div>

                {/* Data Layer */}
                <div className="flex flex-col items-center">
                    <div className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Data & Storage Layer</div>
                    <div className="grid grid-cols-3 gap-4 w-full max-w-3xl">
                        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
                            <Database size={28} className="text-orange-600 mb-2"/>
                            <h4 className="font-semibold text-orange-900">Relational DB</h4>
                            <p className="text-xs text-orange-700 mt-1">PostgreSQL (Metadata, Configs)</p>
                        </div>
                        <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
                            <Database size={28} className="text-teal-600 mb-2"/>
                            <h4 className="font-semibold text-teal-900">Vector DB</h4>
                            <p className="text-xs text-teal-700 mt-1">Milvus/Pinecone (Agent Memory, RAG)</p>
                        </div>
                        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4 flex flex-col items-center text-center shadow-sm relative">
                            <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-[10px] px-2 py-1 rounded-full font-bold animate-pulse">FOCUS</div>
                            <Database size={28} className="text-amber-600 mb-2"/>
                            <h4 className="font-semibold text-amber-900">Object Storage</h4>
                            <p className="text-xs text-amber-700 mt-1">S3/GCS (Isolated User Folders)</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
