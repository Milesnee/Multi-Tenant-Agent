export enum ViewState {
    OVERVIEW = 'OVERVIEW',
    SCALABILITY = 'SCALABILITY',
    ISOLATION = 'ISOLATION',
    WORKSPACE_DEMO = 'WORKSPACE_DEMO',
    HERMES_INTEGRATION = 'HERMES_INTEGRATION',
    MONETIZATION = 'MONETIZATION'
}

export interface FileNode {
    id: string;
    name: string;
    type: 'file' | 'folder';
    size?: string;
    updatedAt: string;
    children?: FileNode[];
}

export interface Tenant {
    id: string;
    name: string;
    tier: 'startup' | 'enterprise';
}

export interface User {
    id: string;
    tenantId: string;
    name: string;
    email: string;
}
