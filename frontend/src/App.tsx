import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import SearchResults from "./components/SearchResults";
import Layout from "./components/Layout";

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="mx-auto">
      <Routes>
        <Route path="/" element={<Layout page={page} setPage={setPage} />}>
          <Route index element={<SearchResults page={page} setPage={setPage} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
