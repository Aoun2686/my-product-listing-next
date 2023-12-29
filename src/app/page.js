import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Link href="/products" className="text-3xl text-blue-500 hover:underline">
        View All Products
      </Link>
    </div>
  );
}
