import Image from 'next/image'
import { Button } from "@/components/ui/button"
import FundamentalRights from '@/ha-comp/FundamentalRights'
import WomenSafety from '@/ha-comp/WomenSafety'
import ConsumerRights from '@/ha-comp/ConsumerRights'
import NationalDuties from '@/ha-comp/NationalDuties'
import EnvironmentalLaws from '@/ha-comp/EnvironmentalLaws'

export default function Home() {
  return (
    <div className=' bg-gray-900'>
    <h1 className='text-xl lg:text-5xl font-bold text-white text-center py-10'>Bhartiya Fundamental Rights</h1>
      <FundamentalRights />
      <h1 className='text-xl lg:text-5xl font-bold text-white text-center py-10'>Consumer Rights</h1>
      <ConsumerRights/>
      <h1 className='text-xl lg:text-5xl font-bold text-white text-center py-10'>Women Safety Rights</h1>
      <WomenSafety/>
      <h1 className='text-xl lg:text-5xl font-bold text-white text-center py-10'>National Duties of being Bhartiya</h1>
      <NationalDuties/>
      <h1 className='text-xl lg:text-5xl font-bold text-white text-center py-10'>Enviromental Laws</h1>
      <EnvironmentalLaws/>
    </div>
  )
}
