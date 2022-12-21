'use client'

import {useEffect, useState} from "react";

export function ClientDateTime() {
    const [date, setDate] = useState("");

    useEffect(() => {
        setDate(new Date().toLocaleString());
    });

    return (
        <div>
            <p>Client rendering time</p>
            <h2>{date}</h2>
        </div>
    );
}
