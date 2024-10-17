import Sidebar from "@/components/SideBar"
import NavBar from "@/components/NavBar"

const MainLayout = ({children}:{children:React.ReactNode}) => {
    return (
      <>
      <NavBar />
        <div className="flex">
          <div className="hidden md:block min-h-screen w-[300px]">
            <Sidebar />
          </div>
          <div className="p-5 w-full md:max-w-[1140px]">
           {children}
          </div>
          </div>
      </>
    )
  }
  
  export default MainLayout