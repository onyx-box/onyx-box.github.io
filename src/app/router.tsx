import {createBrowserRouter} from 'react-router-dom';
import {MainLayout} from '@/components/layout/MainLayout';
import {HomePage} from '@/pages/HomePage';
import {ProjectsPage} from '@/pages/ProjectsPage';
import {ProjectDetailsPage} from '@/pages/ProjectDetailsPage';
import {PrivacyPage} from '@/pages/PrivacyPage';
import {NotFoundPage} from '@/pages/NotFoundPage';

export const router = createBrowserRouter([{
    path: '/',
    element: <MainLayout/>,
    children: [{index: true, element: <HomePage/>}, {
        path: 'projects',
        element: <ProjectsPage/>
    }, {path: 'projects/:slug', element: <ProjectDetailsPage/>}, {path: 'privacy', element: <PrivacyPage/>}]
}, {
    path: '/pl',
    element: <MainLayout/>,
    children: [{index: true, element: <HomePage/>}, {
        path: 'projekty',
        element: <ProjectsPage/>
    }, {path: 'projekty/:slug', element: <ProjectDetailsPage/>}, {path: 'prywatnosc', element: <PrivacyPage/>}]
}, {path: '*', element: <NotFoundPage/>}]);
