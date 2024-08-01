import { Route, Routes } from "react-router-dom"
import List from "./pages/List"
import Add from "./pages/Add"
import Edit from "./pages/Edit"
import SignUp from "./pages/SignUp"
import LayoutAdmin from "./pages/LayoutAdmin"
import SignIn from "./pages/SignIn"
import Auth from "./private/Auth"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth><LayoutAdmin /></Auth>}>
          <Route index element={<List />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
