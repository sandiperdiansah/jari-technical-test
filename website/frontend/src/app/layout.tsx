import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import './globals.css';

const ThemeProvider = dynamic(() => import('@/providers/ThemeProvider'));
const TopLoader = dynamic(() => import('@/components/shared/TopLoader'));
const Backdrop = dynamic(() => import('@/components/shared/Backdrop'));

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'title',
    description: 'description',
};

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            data-scroll-behavior="smooth"
        >
            <body className={`${inter.className} antialiased`}>
                <ThemeProvider>
                    <TopLoader />

                    {children}
                    <Backdrop />
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
