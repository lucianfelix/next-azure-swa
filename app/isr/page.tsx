import {ClientDateTime} from "./ClientDateTime";

export const dynamicParams = true;

async function fetchData(zone: string) {

    const res = await fetch(
        `http://worldtimeapi.org/api/timezone/Europe/${zone}`,
        {next: {revalidate: 30}},
    );
    const data = await res.json();
    return data;
}

export default async function Page({
                                       params,
                                   }: {
    params?: any;
    children?: React.ReactNode;
}) {
    const zone = params?.zone ? params?.zone : 'Zurich';
    const data = await fetchData(zone);
    return (
        <>
            <div>
                <h1>Fetch response time from http://worldtimeapi.org/api/timezone/Europe/{zone}</h1>
                <h2>{new Date(data.datetime).toLocaleString()}</h2>
            </div>

            <div>
                <h1>Server rendering time</h1>
                <h2>{new Date().toLocaleString()}</h2>
            </div>

            <ClientDateTime/>
        </>
    )
}
