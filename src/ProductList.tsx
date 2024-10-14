import Link from "next/link"
import Image from "next/image"

const ProductList = () => {
    return (
        <div className="flex gap-x-8 gap gap-y-16 justify-between flex-wrap">
            <Link href="/test" className="relative">
                <Image src="" alt="" fill/>
            </Link>
        </div>
    )
}

export default ProductList