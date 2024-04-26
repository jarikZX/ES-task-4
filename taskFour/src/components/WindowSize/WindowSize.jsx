import { useWindowSize } from '../../hook/useWindowSize';
import { WindowSizeDisplay } from '../WindowSizeDisplay/WindowSizeDisplay';

export const WindowSize = () => {
  const windowSize = useWindowSize();

  return <WindowSizeDisplay width={windowSize.width} height={windowSize.height} />;
};