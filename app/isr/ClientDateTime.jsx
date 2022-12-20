'use client'

import {useEffect, useState} from "react";

export function ClientDateTime() {
    const [date, setDate] = useState("");

    useEffect(() => {
        setDate(new Date().toLocaleString());
    });

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-medium text-gray-200">Client</h1>
            <p className="font-medium text-gray-500">Datetime: {date}</p>
        </div>
    );
}
