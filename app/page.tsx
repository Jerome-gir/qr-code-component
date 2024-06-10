import Image from "next/image"

export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <div className="w-80 h-[497px] bg-[rgb(var(--white-rgb))] rounded-[20px] p-4">
        <div className=" size-72 md:bg-[rgb(var(--blue-rgb))] rounded-[4px] p-16 relative bg-[rgb(var(--blue-shade-rgb))]">
          <Image
            src="/qr-code.svg"
            alt="qr-code"
            width={160}
            height={160}
            className="relative z-20"
          />
          <Image
            src="/oval-top-left.svg"
            alt="oval"
            width={197}
            height={164}
            className="absolute top-0 left-0 md:opacity-90 rounded-tl-[4px]"
          />
          <Image
            src="/oval-bottom-right.svg"
            alt="oval"
            width={157}
            height={84}
            className="absolute bottom-0 right-0 md:opacity-90 rounded-br-[4px]"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-[288px] h-[129px] mt-6">
          <h1 className="text-[rgb(var(--dark-navy-rgb))] font-bold text-xl text-center px-4 w-[288px] h-[56px] mb-4">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-[rgb(var(--grey-rgb))] text-center font-light text-sm w-[256px] h-[57px]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  )
}
