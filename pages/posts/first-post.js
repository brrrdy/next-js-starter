import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

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
        <Head>
            <title>My First Post</title>
        </Head>
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