'use client';

import Link from 'next/link';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export type QuickLink = {
  href: string;
  title: string;
  description: string;
};

export function QuickLinksGrid({ links }: { links: QuickLink[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {links.map((link) => (
        <Link href={link.href} key={link.href} className="block hover:scale-105 transition-transform">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>{link.title}</CardTitle>
              <CardDescription>{link.description}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
