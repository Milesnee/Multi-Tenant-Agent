import { FileNode } from './types';

export const MOCK_FILE_SYSTEM: FileNode[] = [
    {
        id: 'root-1',
        name: 'Agent Knowledge Base',
        type: 'folder',
        updatedAt: '2023-10-27T10:00:00Z',
        children: [
            { id: 'f-1', name: 'Company_Policies.pdf', type: 'file', size: '2.4 MB', updatedAt: '2023-10-26T14:30:00Z' },
            { id: 'f-2', name: 'Product_Specs_v2.docx', type: 'file', size: '1.1 MB', updatedAt: '2023-10-27T09:15:00Z' },
        ]
    },
    {
        id: 'root-2',
        name: 'Conversation Logs',
        type: 'folder',
        updatedAt: '2023-10-27T11:20:00Z',
        children: [
            {
                id: 'sub-1',
                name: '2023-10',
                type: 'folder',
                updatedAt: '2023-10-27T11:20:00Z',
                children: [
                    { id: 'f-3', name: 'chat_export_1026.json', type: 'file', size: '45 KB', updatedAt: '2023-10-26T23:59:00Z' }
                ]
            }
        ]
    },
    { id: 'root-3', name: 'user_preferences.json', type: 'file', size: '2 KB', updatedAt: '2023-10-25T08:00:00Z' },
    { id: 'root-4', name: 'Custom_Prompts', type: 'folder', updatedAt: '2023-10-20T16:45:00Z', children: [] }
];
