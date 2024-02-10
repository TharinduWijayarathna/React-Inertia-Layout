import React from 'react';
import { usePage } from '@inertiajs/react';

const ProgressBar: React.FC<{ progress: number; color: string }> = ({ progress, color }) => {
    const { props } = usePage();

    return (
        <div
            className="fixed top-0 left-0 right-0 h-1"
            style={{
                width: progress + '%',
                backgroundColor: color,
                transition: 'width 0.3s'
            }}
        ></div>
    );
};

export default ProgressBar;