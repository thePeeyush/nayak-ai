import { AiFillStar } from 'react-icons/ai';




export default function Userslist() {
  return (
      
<ul className="max-w-md divide-y divide-gray-200 bg-white dark:divide-gray-700">
   <li className="py-3 px-4 sm:py-4">
      <div className="flex items-center space-x-4">
         <div className="flex-shrink-0">
            <img className="w-8 h-8 rounded-full" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.2.303434999.1694803402&semt=sph" alt="Neil image"/>
         </div>
         <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
               Ad. Piyush Mishra 
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
               pmishra@law.com
            </p>
         </div>
         <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            4.8
            <AiFillStar className='text-2xl text-yellow-500'/>
         </div>
      </div>
   </li>
   
</ul>
  );
}