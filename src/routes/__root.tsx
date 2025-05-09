import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import Header from '../components/header';
import MainLayout from '../layouts/main-layout';
import Footer from '@/components/footer';

export const Route = createRootRoute({
  component: () => (
    <>
      <MainLayout>
        <Header />
        <Outlet />
        <Footer />
      </MainLayout>
      <TanStackRouterDevtools />
    </>
  )
});
