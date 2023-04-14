import { db } from "@/lib/db";

export default async function Home() {
  await db.set("hello", "world");
  return (
    <main>
      <h2 className="text-green-500">Hello world</h2>
    </main>
  );
}
