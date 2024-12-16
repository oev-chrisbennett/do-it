import './globals.css'
import { Geist } from 'next/font/google'

const inter = Geist({ subsets: ['latin'] })

export const metadata = {
    title: 'To-Do',
    description: 'Simple to-do list, built with Next.js',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
