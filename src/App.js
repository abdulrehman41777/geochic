import React, { Suspense } from 'react';
import { Spiner } from './component/Spiner';
import MainRoutes from './routes/MainRoutes';
import './App.scss';

const App = () => {
  return (<>
    <Suspense fallback={<Spiner />}>
      <MainRoutes />
    </Suspense>
  </>);
}

export default App;
