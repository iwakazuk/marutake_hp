import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/page'));
const Concept = lazy(() => import('../pages/concept/page'));
const Story = lazy(() => import('../pages/story/page'));
const ShareHouse = lazy(() => import('../pages/sharehouse/page'));
const Rooms = lazy(() => import('../pages/rooms/page'));
const Access = lazy(() => import('../pages/access/page'));
const FAQ = lazy(() => import('../pages/faq/page'));
const Blog = lazy(() => import('../pages/blog/page'));
const BlogDetail = lazy(() => import('../pages/blog/detail'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/concept',
    element: <Concept />,
  },
  {
    path: '/story',
    element: <Story />,
  },
  {
    path: '/sharehouse',
    element: <ShareHouse />,
  },
  {
    path: '/rooms',
    element: <Rooms />,
  },
  {
    path: '/access',
    element: <Access />,
  },
  {
    path: '/faq',
    element: <FAQ />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/blog/:id',
    element: <BlogDetail />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
