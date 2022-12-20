'use client'

import {useEffect, useState} from "react";

export function ClientDateTime() {
    const [date, setDate] = useState("");

    useEffect(() => {
        setDate(new Date().toLocaleString());
    });

    return (
        <div>
            <h1>Client rendering time</h1>
            <h2>{date}</h2>
        </div>
    );
}
