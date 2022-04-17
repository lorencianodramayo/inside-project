import React, { FC } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

//components
import { ConceptSettings, Playground } from '../index';

//css
import './Main.less';

const Main: FC = () => {
  return  ( 
        <div className="Main">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ConceptSettings />} />
                    <Route path="/playground/:id" element={<Playground />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main;