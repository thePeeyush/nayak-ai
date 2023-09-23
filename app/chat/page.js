import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <iframe src="https://chat.openai.com/chat" frameborder="0" width={500} height={800}>

      </iframe>
    </div>
  )
}
