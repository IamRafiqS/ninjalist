import Link from 'next/link';

const test = () => {
    return (
        <div>
            <h1>this is a test page</h1>
            <p>
                <Link href='/about'>About Page</Link>
            </p>
        </div>
    );
}

export default test;