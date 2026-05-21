import React, { useState, useMemo } from 'react';
import { Folder, FileText, Upload, Plus, ChevronRight, Home, FileJson, FileImage, MoreVertical } from 'lucide-react';
import { MOCK_FILE_SYSTEM } from '../constants';
import { FileNode } from '../types';

export const UserWorkspaceDemo: React.FC = () => {
    // State to track current navigation path
    const [path, setPath] = useState<FileNode[]>([]);
    
    // Determine current folder contents based on path
    const currentContents = useMemo(() => {
        if (path.length === 0) return MOCK_FILE_SYSTEM;
        const currentFolder = path[path.length - 1];
        return currentFolder.children || [];
    }, [path]);

    const handleNavigate = (folder: FileNode) => {
        if (folder.type === 'folder') {
            setPath([...path, folder]);
        }
    };

    const handleNavigateUp = (index: number) => {
        setPath(path.slice(0, index + 1));
    };

    const handleGoHome = () => {
        setPath([]);
    };

    const getFileIcon = (name: string) => {
        if (name.endsWith('.json')) return <FileJson className="text-amber-500" size={20} />;
        if (name.endsWith('.png') || name.endsWith('.jpg')) return <FileImage className="text-purple-500" size={20} />;
        return <FileText className="text-blue-500" size={20} />;
    };

    return (
        <div className="max-w-5xl mx-auto animate-in fade-in duration-500 h-full flex flex-col">
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">User Workspace Demo</h2>
                <p className="text-slate-600">
                    Simulating the S3-backed independent folder system for User: <code>usr_98765</code> (Tenant: <code>acme_corp</code>).
                </p>
            </div>

            {/* File Explorer UI */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm flex-1 flex flex-col overflow-hidden min-h-[500px]">
                
                {/* Toolbar & Breadcrumbs */}
                <div className="border-b border-slate-200 p-4 flex items-center justify-between bg-slate-50">
                    <div className="flex items-center text-sm text-slate-600">
                        <button 
                            onClick={handleGoHome}
                            className="hover:text-primary hover:bg-slate-200 p-1 rounded transition-colors flex items-center gap-1"
                        >
                            <Home size={16} /> <span className="font-medium">My Workspace</span>
                        </button>
                        
                        {path.map((folder, index) => (
                            <React.Fragment key={folder.id}>
                                <ChevronRight size={16} className="mx-1 text-slate-400" />
                                <button 
                                    onClick={() => handleNavigateUp(index)}
                                    className="hover:text-primary hover:bg-slate-200 p-1 rounded transition-colors font-medium"
                                >
                                    {folder.name}
                                </button>
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                            <Plus size={16} /> New Folder
                        </button>
                        <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-primary rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                            <Upload size={16} /> Upload
                        </button>
                    </div>
                </div>

                {/* Column Headers */}
                <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-slate-100 bg-white text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    <div className="col-span-6">Name</div>
                    <div className="col-span-3">Last Modified</div>
                    <div className="col-span-2">Size</div>
                    <div className="col-span-1 text-right">Actions</div>
                </div>

                {/* File List */}
                <div className="flex-1 overflow-y-auto bg-white">
                    {currentContents.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-4">
                            <Folder size={48} className="opacity-20" />
                            <p>This folder is empty.</p>
                        </div>
                    ) : (
                        <ul className="divide-y divide-slate-100">
                            {currentContents.map((item) => (
                                <li 
                                    key={item.id}
                                    className="grid grid-cols-12 gap-4 px-6 py-3 items-center hover:bg-slate-50 transition-colors group cursor-pointer"
                                    onClick={() => handleNavigate(item)}
                                >
                                    <div className="col-span-6 flex items-center gap-3">
                                        {item.type === 'folder' ? (
                                            <Folder className="text-sky-400 fill-sky-100" size={20} />
                                        ) : (
                                            getFileIcon(item.name)
                                        )}
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-primary transition-colors">
                                            {item.name}
                                        </span>
                                    </div>
                                    <div className="col-span-3 text-sm text-slate-500">
                                        {new Date(item.updatedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                                    </div>
                                    <div className="col-span-2 text-sm text-slate-500">
                                        {item.size || '--'}
                                    </div>
                                    <div className="col-span-1 flex justify-end">
                                        <button className="p-1 text-slate-400 hover:text-slate-700 rounded hover:bg-slate-200 opacity-0 group-hover:opacity-100 transition-all" onClick={(e) => e.stopPropagation()}>
                                            <MoreVertical size={16} />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                
                {/* Status Bar */}
                <div className="bg-slate-50 border-t border-slate-200 p-2 px-4 text-xs text-slate-500 flex justify-between">
                    <span>{currentContents.length} items</span>
                    <span className="font-mono">s3://app-data/acme_corp/usr_98765/{path.map(p => p.name).join('/')}</span>
                </div>
            </div>
        </div>
    );
};
