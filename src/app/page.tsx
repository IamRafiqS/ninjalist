import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe molestiae ducimus in. Voluptatibus odio omnis voluptates pariatur nam expedita sed tempore, ratione blanditiis ab quas nulla. Magni odio voluptates repudiandae.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe molestiae ducimus in. Voluptatibus odio omnis voluptates pariatur nam expedita sed tempore, ratione blanditiis ab quas nulla. Magni odio voluptates repudiandae.</p>
      <Link href='/about'>About Page</Link>
    </div>

  );
}
