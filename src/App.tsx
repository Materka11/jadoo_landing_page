import { HomePage } from './pages/Home/HomePage';
import { useHamburgerStore } from './stores/hamburgerStore';

function App() {
  const isHamburgerMenuOpen = useHamburgerStore(
    (state) => state.isHamburgerMenuOpen
  );

  return (
    <main
      className={`flex h-full min-h-screen w-full min-w-full justify-center bg-white transition-all duration-300 ease-in-out ${isHamburgerMenuOpen && 'absolute !min-h-[calc(100vh_-_5rem)] -translate-x-60 translate-y-10 rounded-3xl'}`}
    >
      <HomePage />
    </main>
  );
}

export default App;
