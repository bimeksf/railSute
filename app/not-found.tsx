import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='min-h-screen flex justify-center items-center mx-auto flex-col'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='hover:bg-amber-300 p-4 rounded-3xl'>Return Home</Link>
    </div>
  )
}