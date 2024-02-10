import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

const Home: React.FC = () => {
    const { props } = usePage();

    return (
        <AppLayout title='Home'>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center h-screen">
                    <h1 className="text-4xl font-bold">Welcome to Laravel React</h1>
                </div>
            </div>
        </AppLayout>
    );
};

export default Home;