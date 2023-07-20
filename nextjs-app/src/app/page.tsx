import Image from 'next/image'


export default function Home() {
  return (
    <main>
         <Image
          src="/windrunner.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
    </main>
  )
}
