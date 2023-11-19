export default function LinkBadge(props: any) {

  return (
    <>
      <a href={props.url} target="_blank" className="inline-flex hover:bg-theme-oldlace items-center rounded-md bg-theme-champagne px-2 py-1 text-sm  text-theme-navy border border-theme-navy text-center shadow-[1.5px_1.5px_0px_#040728]">
        {props.title}
      </a>
    </>
  )
}