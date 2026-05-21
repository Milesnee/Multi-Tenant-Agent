import React from 'react';
import { TerminalSquare, Wrench, Braces, GitMerge, Cpu } from 'lucide-react';

export const HermesIntegration: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto animate-in fade-in duration-500">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Hermes Agent Integration</h2>
                <p className="text-slate-600">
                    Leveraging <a href="https://github.com/nousresearch/hermes-agent" target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">nousresearch/hermes-agent</a> as the core execution engine for advanced tool use and structured reasoning.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <GitMerge className="text-emerald-500" /> Architecture Fit
                        </h3>
                        <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                            Instead of building a custom agent loop from scratch, we embed the <strong>Hermes Agent</strong> framework inside our stateless Kubernetes worker pods. When a user request arrives, the API Gateway routes it to an available worker. The worker initializes a Hermes Agent instance dynamically, injecting the user's specific context, tools, and memory retrieved from the multi-tenant storage layer.
                        </p>
                        
                        <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm text-slate-300 overflow-x-auto">
                            <div className="text-emerald-400 mb-2">// Dynamic Hermes Initialization per Request</div>
                            <code>
                                const agent = new HermesAgent({'{'}<br/>
                                &nbsp;&nbsp;model: tenantConfig.modelPreference,<br/>
                                &nbsp;&nbsp;tools: await loadTenantTools(tenantId),<br/>
                                &nbsp;&nbsp;memory: new VectorDBMemory(tenantId, userId),<br/>
                                &nbsp;&nbsp;systemPrompt: userCustomPrompt<br/>
                                {'}'});<br/>
                                <br/>
                                const result = await agent.run(userMessage);
                            </code>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <Wrench className="text-blue-500" /> Multi-Tenant Tool Registry
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Hermes excels at function calling. We implement a centralized Tool Registry in PostgreSQL. Tenants can register custom API endpoints as tools. When Hermes runs, it only receives the JSON schemas for tools authorized for that specific tenant, ensuring strict isolation of capabilities.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200">
                        <h3 className="text-lg font-bold text-emerald-900 mb-3 flex items-center gap-2">
                            <Braces className="text-emerald-600" /> Why Hermes?
                        </h3>
                        <ul className="space-y-3 text-sm text-emerald-800">
                            <li className="flex items-start gap-2">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                                <p><strong>Structured Output:</strong> Native support for complex JSON generation, crucial for programmatic workflows.</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                                <p><strong>Advanced Tool Use:</strong> Parallel function calling and robust error recovery during tool execution.</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                                <p><strong>Open Source:</strong> Avoids vendor lock-in, allowing us to run fine-tuned Hermes models locally if needed.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                            <Cpu className="text-slate-600" /> Stateless Execution
                        </h3>
                        <p className="text-sm text-slate-600">
                            Because Hermes Agent instances are created and destroyed per request, we can scale the worker pods from 0 to 10,000 instantly using KEDA, without worrying about sticky sessions or memory leaks.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
