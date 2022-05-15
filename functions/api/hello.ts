// Reacts to GET /api/hello.
export async function onRequestGet(_request: Request) {
  return new Response(`Hello World`);
}
