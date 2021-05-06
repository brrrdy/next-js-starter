import Link from 'next/link'
import Image from 'next/image'


const ProfileComponent = () => (
    <Image 
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="Cody Zornes"
    />
)

export default function FirstPost() {
    return (
        <>
        <h1>First Post</h1>
        <ProfileComponent />
        <h2>
            <Link href="/">
                <a>Back to home.</a>
            </Link>
        </h2>
        </>
    )
}