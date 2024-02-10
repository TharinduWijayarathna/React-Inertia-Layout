import React from "react";
import { usePage } from '@inertiajs/react';

export default function Footer() {
    const { props } = usePage();

    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="bg-gray-800 text-white text-center py-4">
                <p>&copy; Copyright {year}, All Rights Reserved by Tharindu Wijayarathna</p>
            </div>
        </footer>
    );
}
