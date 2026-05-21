import React from 'react';
import { Activity, ArrowUpRight, Users, Zap, ServerCrash } from 'lucide-react';

export const ScalabilityPlan: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto animate-in fade-in duration-500">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Elastic Scalability Strategy</h2>
                <p className="text-slate-600">How we handle the journey from 10 beta testers to 100,000 concurrent users without degradation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Phase 1 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                            <Users className="text-blue-500" /> Phase 1: 10 - 1,000 Users
                        </h3>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">Startup</span>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex items-start gap-2">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                            <p><strong>Compute:</strong> Managed PaaS (e.g., AWS App Runner, Google Cloud Run) for zero-ops auto-scaling based on HTTP traffic.</p>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                            <p><strong>Database:</strong> Single managed PostgreSQL instance with automated backups.</p>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                            <p><strong>Agents:</strong> Synchronous execution for simple tasks, basic background queues (Redis/Celery) for longer LLM calls.</p>
                        </li>
                    </ul>
                </div>

                {/* Phase 2 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                            <Activity className="text-emerald-500" /> Phase 2: 10k - 100k+ Users
                        </h3>
                        <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-medium">Enterprise</span>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex items-start gap-2">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                            <p><strong>Compute:</strong> Kubernetes (EKS/GKE) cluster. Using <strong>KEDA</strong> (Kubernetes Event-driven Autoscaling) to scale Agent Pods based on message queue length, not just CPU.</p>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                            <p><strong>Database:</strong> PostgreSQL with Read Replicas. Connection pooling (PgBouncer). Sharding by Tenant ID if necessary.</p>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                            <p><strong>Agents:</strong> Fully asynchronous event-driven architecture using Kafka/RabbitMQ. Agents are stateless consumers.</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Key Technologies */}
            <h3 className="text-xl font-bold text-slate-900 mb-4">Core Scaling Mechanisms</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <Zap className="text-amber-500 mb-3" size={24} />
                    <h4 className="font-semibold text-slate-800 mb-2">Stateless Agents</h4>
                    <p className="text-sm text-slate-600">Agent execution environments hold no local state. All context is fetched from Vector DB and Object Storage per request, allowing instant horizontal scaling.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <ArrowUpRight className="text-indigo-500 mb-3" size={24} />
                    <h4 className="font-semibold text-slate-800 mb-2">Event-Driven Scaling</h4>
                    <p className="text-sm text-slate-600">Instead of waiting for CPU to spike, we monitor the queue of pending Agent tasks. If the queue grows, KEDA instantly spins up more worker pods.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <ServerCrash className="text-rose-500 mb-3" size={24} />
                    <h4 className="font-semibold text-slate-800 mb-2">Rate Limiting & Quotas</h4>
                    <p className="text-sm text-slate-600">API Gateway enforces strict rate limits per tenant and per user to prevent noisy neighbor problems and protect backend LLM API budgets.</p>
                </div>
            </div>
        </div>
    );
};
