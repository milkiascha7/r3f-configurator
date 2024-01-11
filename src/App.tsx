import { Canvas } from '@react-three/fiber';
import './App.css';
import Experience from './components/Experience';
import Configurator from './components/Configurator';
import { CustomizeProvider } from './contexts/Customize';

function App() {
  return (
    <CustomizeProvider>
      <div className="app">
        <Canvas dpr={[1, 2]}>
          <color attach="background" args={['#101010']} />
          <fog attach="fog" args={['#101010', 5, 30]} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CustomizeProvider>
  );
}

export default App;
