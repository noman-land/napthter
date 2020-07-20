import { Home } from '../components/Home';
import { Music } from '../components/Music';
import { Movies } from '../components/Movies';
import { Notes } from '../components/Notes';
import { Stuff } from '../components/Stuff';
import { Subscriptions } from '../components/Subscriptions';

export const routes = [
  { icon: 'fas fa-home', label: 'Home', path: '', component: Home },
  { icon: 'fas fa-video', label: 'Movies', path: 'movies', component: Movies },
  { icon: 'fas fa-music', label: 'Music', path: 'music', component: Music },
  {
    icon: 'fas fa-sticky-note',
    label: 'Notes',
    path: 'notes',
    component: Notes,
  },
  { icon: 'fas fa-box-full', label: 'Stuff', path: 'stuff', component: Stuff },
  {
    icon: 'fas fa-rss',
    label: 'Subscriptions',
    path: 'subscriptions',
    component: Subscriptions,
  },
];
