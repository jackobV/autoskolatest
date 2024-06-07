type sectionLink = {
    title: string
    link: string
}
type sectionLinkArr = {
    array: sectionLink[]
}
export default function BlogArticleNav(props:sectionLinkArr){
    return(
        <div className="px-4 pt-10 max-w-2xl mx-auto">
            <ul className="list-disc px-4">
                {props.array.map((link)=>(
                    <li key={link.link} className="pt-2 md:pt-4 md:text-lg">
                        <a className="text-blue-600 " href={"#"+link.link}>
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>

        </div>
    )
}