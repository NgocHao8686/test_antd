import { Outlet } from "react-router-dom"

const LayoutAdmin = () => {
  return (
    <div className="container mx-auto">
      <Outlet />
    </div>
  )
}

export default LayoutAdmin
