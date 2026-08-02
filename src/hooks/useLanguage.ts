import {useLocation} from 'react-router-dom';
import type {Language} from '@/types/project';

export function useLanguage(): Language {
    return useLocation().pathname.startsWith('/pl') ? 'pl' : 'en'
}
