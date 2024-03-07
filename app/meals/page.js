import Link from "next/link"
const AboutPage = () => {
    return (
        <>
            <h1>Here are our meals:</h1>
            <Link href="../meals/share">Meal Share</Link>
            <Link href="../meals/page-1">Page-1</Link>
            <Link href="../meals/page-2">Page-2</Link>
        </>
    )
}
export default AboutPage