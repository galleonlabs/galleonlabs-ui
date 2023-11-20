export default function LinkBadge(props: any) {

  return (
    <>
      <a href={props.url} target="_blank" className="inline-flex  items-center rounded-md px-2 py-1 text-sm hover:bg-theme-champagne  text-theme-navy border border-theme-navy text-center shadow-[1.5px_1.5px_0px_#040728] mx-1.5 mb-2">
        {props.title}
      </a>
    </>
  )
}