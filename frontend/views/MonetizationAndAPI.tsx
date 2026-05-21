import React from 'react';
import { Coins, Key, BarChart3, ShieldAlert, Zap, CreditCard } from 'lucide-react';

export const MonetizationAndAPI: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto animate-in fade-in duration-500">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Commercialization & API Control</h2>
                <p className="text-slate-600">
                    Comprehensive token management, subscription tiers, and API gateway controls to build a profitable and secure SaaS platform.
                </p>
            </div>

            {/* Subscription Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
                    <h3 className="text-lg font-bold text-slate-800 mb-1">Starter</h3>
                    <div className="text-3xl font-bold text-slate-900 mb-4">$0<span className="text-sm font-normal text-slate-500">/mo</span></div>
                    <ul className="space-y-2 text-sm text-slate-600 flex-1 mb-6">
                        <li className="flex items-center gap-2"><Zap size={14} className="text-amber-500"/> 100k Tokens / month</li>
                        <li className="flex items-center gap-2"><Zap size={14} className="text-amber-500"/> Standard Models</li>
                        <li className="flex items-center gap-2"><Zap size={14} className="text-amber-500"/> 10 RPM Rate Limit</li>
                    </ul>
                    <button className="w-full py-2 bg-slate-100 text-slate-700 rounded-lg font-medium text-sm hover:bg-slate-200 transition-colors">Current Plan</button>
                </div>
                
                <div className="bg-primary p-6 rounded-2xl shadow-md border border-blue-600 flex flex-col relative transform md:-translate-y-2">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
                    <h3 className="text-lg font-bold text-white mb-1">Pro</h3>
                    <div className="text-3xl font-bold text-white mb-4">$49<span className="text-sm font-normal text-blue-200">/mo</span></div>
                    <ul className="space-y-2 text-sm text-blue-100 flex-1 mb-6">
                        <li className="flex items-center gap-2"><Zap size={14} className="text-amber-300"/> 5M Tokens / month</li>
                        <li className="flex items-center gap-2"><Zap size={14} className="text-amber-300"/> Premium Hermes Models</li>
                        <li className="flex items-center gap-2"><Zap size={14} className="text-amber-300"/> 100 RPM Rate Limit</li>
                    </ul>
                    <button className="w-full py-2 bg-white text-primary rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors">Upgrade to Pro</button>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
                    <h3 className="text-lg font-bold text-slate-800 mb-1">Enterprise</h3>
                    <div className="text-3xl font-bold text-slate-900 mb-4">Custom</div>
                    <ul className="space-y-2 text-sm text-slate-600 flex-1 mb-6">
                        <li className="flex items-center gap-2"><Zap size={14} className="text-amber-500"/> Unlimited Tokens</li>
                        <li className="flex items-center gap-2"><Zap size={14} className="text-amber-500"/> Bring Your Own Key (BYOK)</li>
                        <li className="flex items-center gap-2"><Zap size={14} className="text-amber-500"/> Custom Rate Limits</li>
                    </ul>
                    <button className="w-full py-2 bg-slate-900 text-white rounded-lg font-medium text-sm hover:bg-slate-800 transition-colors">Contact Sales</button>
                </div>
            </div>

            {/* Architecture Details */}
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex gap-6 items-start">
                    <div className="bg-amber-100 p-3 rounded-xl shrink-0">
                        <Coins className="text-amber-600" size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Token Metering & Billing Engine</h3>
                        <p className="text-slate-600 mb-4 text-sm">
                            Every request processed by the Hermes Agent is intercepted by our API Gateway. The gateway calculates prompt and completion tokens and pushes events to a high-throughput message queue (Kafka/Redis Streams). A dedicated Billing Service consumes these events to update tenant quotas in real-time.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                                <div className="text-xs font-bold text-slate-500 uppercase mb-1">Pre-paid Quotas</div>
                                <div className="text-sm text-slate-700">Requests are blocked at the edge if the tenant's token balance is zero, protecting backend LLM costs.</div>
                            </div>
                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                                <div className="text-xs font-bold text-slate-500 uppercase mb-1">Cost Allocation</div>
                                <div className="text-sm text-slate-700">Tokens are tagged by <code>tenant_id</code> and <code>user_id</code>, allowing granular cost reporting and chargebacks.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex gap-6 items-start">
                    <div className="bg-indigo-100 p-3 rounded-xl shrink-0">
                        <Key className="text-indigo-600" size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">API Management & Security</h3>
                        <p className="text-slate-600 mb-4 text-sm">
                            For developers integrating our agents into their own apps, we provide robust API key management.
                        </p>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <ShieldAlert className="text-indigo-500 shrink-0 mt-0.5" size={16} />
                                <span><strong>Dynamic Rate Limiting:</strong> Enforced at the API Gateway (e.g., Kong) based on the subscription tier. Prevents noisy neighbors.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Key className="text-indigo-500 shrink-0 mt-0.5" size={16} />
                                <span><strong>Key Rotation & Scopes:</strong> Tenants can generate multiple API keys with specific scopes (e.g., read-only, specific agent access) and rotate them without downtime.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <BarChart3 className="text-indigo-500 shrink-0 mt-0.5" size={16} />
                                <span><strong>Bring Your Own Key (BYOK):</strong> Enterprise tenants can securely store their own OpenAI/Anthropic keys in our HashiCorp Vault. The gateway routes their traffic using their keys, bypassing our token billing.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
