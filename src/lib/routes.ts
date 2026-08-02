import type {Language} from '@/types/project';

export function routeFor(l: Language, r: 'home' | 'projects' | 'privacy', s?: string) {
    if (r === 'home') return l === 'pl' ? '/pl/' : '/';
    if (r === 'privacy') return l === 'pl' ? '/pl/prywatnosc' : '/privacy';
    if (s) return l === 'pl' ? `/pl/projekty/${s}` : `/projects/${s}`;
    return l === 'pl' ? '/pl/projekty' : '/projects'
}

export function alternate(path: string) {
    if (path.startsWith('/pl/projekty/')) return path.replace('/pl/projekty/', '/projects/');
    if (path === '/pl/projekty') return '/projects';
    if (path === '/pl/prywatnosc') return '/privacy';
    if (path === '/pl/' || path === '/pl') return '/';
    if (path.startsWith('/projects/')) return path.replace('/projects/', '/pl/projekty/');
    if (path === '/projects') return '/pl/projekty';
    if (path === '/privacy') return '/pl/prywatnosc';
    return '/pl/'
}
