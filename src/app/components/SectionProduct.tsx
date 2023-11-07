interface SectionProductProps{
  children: React.ReactNode
  titleSection: string
}
export const SectionProduct = ({children, titleSection}:SectionProductProps) => {
  return (
    <section className="m-5 mb-5">
     <h2 className="text-2xl font-semibold mt-3 mb-3">
        {titleSection}
      </h2>
      {
        children
      }
    </section>
  )
}
