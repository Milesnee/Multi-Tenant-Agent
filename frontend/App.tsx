import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ArchitectureOverview } from './views/ArchitectureOverview';
import { ScalabilityPlan } from './views/ScalabilityPlan';
import { TenantIsolation } from './views/TenantIsolation';
import { UserWorkspaceDemo } from './views/UserWorkspaceDemo';
import { HermesIntegration } from './views/HermesIntegration';
import { MonetizationAndAPI } from './views/MonetizationAndAPI';
import { ViewState } from './types';

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState<ViewState>(ViewState.OVERVIEW);

    const renderView = () => {
        switch (currentView) {
            case ViewState.OVERVIEW:
                return <ArchitectureOverview />;
            case ViewState.HERMES_INTEGRATION:
                return <HermesIntegration />;
            case ViewState.MONETIZATION:
                return <MonetizationAndAPI />;
            case ViewState.SCALABILITY:
                return <ScalabilityPlan />;
            case ViewState.ISOLATION:
                return <TenantIsolation />;
            case ViewState.WORKSPACE_DEMO:
                return <UserWorkspaceDemo />;
            default:
                return <ArchitectureOverview />;
        }
    };

    return (
        <div className="flex h-screen bg-background overflow-hidden">
            <Sidebar currentView={currentView} onViewChange={setCurrentView} />
            
            <main className="flex-1 overflow-y-auto">
                <div className="p-8 min-h-full">
                    {renderView()}
                </div>
            </main>
        </div>
    );
};

export default App;
