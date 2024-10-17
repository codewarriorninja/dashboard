import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ModeToggle } from "./ModeToggle"

const NavBar = () => {
  return (
    <div className="bg-[#0D9488] dark:bg-slate-700 text-white py-2 px-5 flex justify-between items-center">
        <Link href='/'>
         <h1>Henok</h1>
        </Link>
    <DropdownMenu>
    <div className="ml-auto mr-2">
     <ModeToggle />
    </div>
  <DropdownMenuTrigger className="focus:outline-none">
  <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"
         />
         <AvatarFallback className="text-black">LT</AvatarFallback>
    </Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
        <Link href='/profile'>Profile</Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
        <Link href='/auth'>Logout</Link>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
    </div>
  )
}

export default NavBar
