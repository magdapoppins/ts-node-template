import Fastify from "fastify";

const app = Fastify();

app.get("/status", async () => ({ status: "ok" }));

const port = Number(process.env.PORT ?? 8080);

try {
  await app.listen({ port });
  console.log(`API listening on http://localhost:${port}`);
} catch (error) {
  app.log.error(error);
  process.exit(1);
}
