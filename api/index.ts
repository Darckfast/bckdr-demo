import { fastStringConcat } from "./lib";

const server = Bun.serve({
    port: 3000,
    fetch(request) {
        const { searchParams } = new URL(request.url)

        const left = searchParams.get("left")
        const right = searchParams.get("right")

        return new Response(fastStringConcat(left, right));
    },
});

console.log(`Listening on localhost:${server.port}`);
