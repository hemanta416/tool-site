'use client';
import Link from 'next/link';

export default function ToolCard({ toolId, title, description }) {
  return (
    <Link href={`/tools/${toolId}`}>
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </Link>
  );
}
