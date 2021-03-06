import { Button } from './Button';

import '../styles/sidebar.scss';
interface Genres {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface SidebarProps {
  genres: Array<Genres>;
  selectedId: number;
  handleClickButton: Function;
}

export function SideBar( props: SidebarProps) {
  // Complete aqui
  return(
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClickButton(genre.id)}
            selected={props.selectedId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}