import Link from 'next/link';

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe molestiae ducimus in. Voluptatibus odio omnis voluptates pariatur nam expedita sed tempore, ratione blanditiis ab quas nulla. Magni odio voluptates repudiandae.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe molestiae ducimus in. Voluptatibus odio omnis voluptates pariatur nam expedita sed tempore, ratione blanditiis ab quas nulla. Magni odio voluptates repudiandae.</p>
            <p>
            <Link href="/about/test">Test</Link>
            </p>
            <p>
            <Link href="/">Homepage</Link>
            </p>
        </div>
    );
}

export default About;