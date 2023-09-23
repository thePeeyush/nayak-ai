"use client"
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import './globals.css'
import { Inter,Noto_Sans } from 'next/font/google'
import { BiHome, BiUserCircle } from 'react-icons/bi';
import { ImHammer2 } from 'react-icons/im';
import { BsChatLeftText,BsGlobe2 } from 'react-icons/bs';
import { useEffect } from 'react';
import { useRouter,usePathname } from 'next/navigation'
import GoogleTranslateButton from '@/lib/translate'


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(()=>{
console.log(pathname);
  },[])
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=' h-screen'>
        <header className='flex flex-row justify-between header items-center font-semibold bg-gray-800 p-4'>
          <div className="logo text-3xl text-yellow-500">
            NAYAK <span className=' font-extralight'>AI</span>
          </div>
          <div className="language flex flex-row items-center gap-2">
          <BsGlobe2 className='text-4xl text-white'/>
          <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          <SelectItem value="apple">Hindi</SelectItem>
          <SelectItem value="banana">Gujrati</SelectItem>
          <SelectItem value="blueberry">Marathi</SelectItem>
          <SelectItem value="grapes">tamil</SelectItem>
          <SelectItem value="pineapple">telgu</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    {/* <GoogleTranslateButton /> */}
          </div>
          
        </header>
        <div className='flex flex-row'>
         <div className=' lg:ml-48'>
         {children}
         </div>
          <nav className=' bottom-0 fixed w-full bg-gray-800 lg:bg-slate-600 lg:bottom-auto lg:left-0 lg:w-48'>
          <ul className='flex flex-row lg:flex-col lg:h-screen lg:justify-start lg:gap-6 justify-around p-4'>
          <li className={pathname === '/'        ? ' active navlink'  : 'navlink'} onClick={() => router.push('/')} > <BiHome/>               <div className='hidden md:inline'>Home</div></li>
          <li className={pathname === '/chat'    ? ' active navlink'  : 'navlink'} onClick={() => router.push('/chat')} > <BsChatLeftText/>   <div className='hidden md:inline'>Chat</div></li>
          <li className={pathname === '/lawyers' ? ' active navlink'  : 'navlink'} onClick={() => router.push('/lawyers')} > <ImHammer2/>     <div className='hidden md:inline'>Lawyers</div></li>
          <li className={pathname === '/account' ? ' active navlink'  : 'navlink'} onClick={() => router.push('/account')} > <BiUserCircle/>  <div className='hidden md:inline'>Account</div></li>
          </ul>
        </nav>
        </div>
        </div>
       
      </body>
    </html>
  )
}
