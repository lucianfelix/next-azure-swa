
import { ClientDateTime } from "./ClientDateTime";

export const dynamicParams = true;

async function fetchData(zone: string) {

    const res = await fetch(
        `http://worldtimeapi.org/api/timezone/Europe/${zone}`,
        {next: {revalidate: 10}},
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
    console.log(zone);
    const data = await fetchData(zone);
    return (
        <>
            <div className="space-y-4">
                <h1 className="text-2xl font-medium text-gray-200">Fetch</h1>
                <p className="font-medium text-gray-500">Zone: {zone}</p>
                <p className="font-medium text-gray-500">Datetime: {data.datetime}</p>
            </div>

            <div className="space-y-4">
                <h1 className="text-2xl font-medium text-gray-200">Server</h1>
                <p className="font-medium text-gray-500">Datetime: {new Date().toLocaleString()}</p>
            </div>

          <ClientDateTime/>
        </>
    )
}
