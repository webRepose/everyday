import { Routes, Route} from "react-router-dom";
import React, { lazy, memo, Suspense } from 'react';
import Preloader from '../preloader/Preloader';

const Header = lazy(() => import('../../header/Header')),
Home = lazy(() => import('../../main/Home/Home')),
Training = lazy(()=> import('../../main/Training/Training'));

const Router = memo(() => {
    return (
        <>
        <Routes>
        <Route path="/" element={<Suspense fallback={<Preloader/>}><Header/></Suspense>}>
        <Route index element={<Suspense fallback={<Preloader/>}><Home/></Suspense>}></Route>
        <Route path="training" element={<Suspense fallback={<Preloader/>}><Training/></Suspense>}></Route>
        </Route>
      </Routes>
        </>
    );
});

export default Router;