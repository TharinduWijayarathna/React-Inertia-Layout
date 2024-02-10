import React from "react";
import { Link, usePage } from '@inertiajs/react';

export default function Header() {
    const { props } = usePage();

    return (
        <header>
            <nav className="bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        <div>
                            <Link href={route('home')} className="text-white text-2xl font-bold">Laravel React</Link>
                        </div>
                        <div>
                            <Link href={route('home')} className="text-white hover:text-gray-400 px-4">About</Link>
                            <Link href={route('home')} className="text-white hover:text-gray-400 px-4">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}