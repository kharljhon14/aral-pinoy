import type { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  return <main className="container mx-auto lg:my-8 flex flex-col gap-y-6">{children}</main>;
}
