import React from 'react';
import { lazy, Suspense } from 'react';
import './App.css';
import Layout from './components/Layout';
import { Navigate, Route, Routes } from 'react-router';
import { COLUMN_PAGE_PATH, MY_RECORD_PAGE_PATH, TOP_PAGE_PATH } from './constant/routes';
const TopPage = lazy(() => import('./pages/TopPage'));
const ColumnPage = lazy(() => import('./pages/ColumnPage'));
const MyRecordPage = lazy(() => import('./pages/MyRecordPage'));

function App() {
  return (
    <div className="App">
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={TOP_PAGE_PATH} element={<TopPage />} />
            <Route path={COLUMN_PAGE_PATH} element={<ColumnPage />} />
            <Route path={MY_RECORD_PAGE_PATH} element={<MyRecordPage />} />
            <Route path="*" element={<Navigate to={TOP_PAGE_PATH} />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
