import Image from "next/image"

export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <>
      {/* Regular logo for screen */}
      <Image
        src="/hvg-logo.svg"
        alt="HVG Logo"
        width={120}
        height={40}
        className={`${props.className} print:hidden`}
        priority
      />
      {/* Light logo for print */}
      <Image
        src="/hvg-logo-light.svg"
        alt="HVG Logo"
        width={120}
        height={40}
        className={`${props.className} hidden print:block`}
        priority
      />
    </>
  )
}
