export default async function Page() {
    return (
        <>
            <h3>
                <a href="/isr">App SSR + fetch&revalidate every 20s</a><br/>
            </h3>
            <h3>
                <a href="/live">App SSR + non cached backend fetch</a><br/>
            </h3>
            <h3>
                <a href="/livenofetch">App SSR non cached, no backend fetch</a><br/>
            </h3>
        </>
    );
}
