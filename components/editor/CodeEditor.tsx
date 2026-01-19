'use client';

import React from 'react';
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
    initialValue?: string;
    onChange?: (value: string | undefined) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue = '// Write your game code here\n', onChange }) => {
    return (
        <div className="h-full w-full bg-[#1e1e1e]">
            <Editor
                height="100%"
                defaultLanguage="javascript"
                theme="vs-dark"
                defaultValue={initialValue}
                onChange={onChange}
                options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    wordWrap: 'on',
                    automaticLayout: true,
                }}
            />
        </div>
    );
};

export default CodeEditor;
