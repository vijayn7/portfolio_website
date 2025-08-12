import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vijay Raju Nannapuraju - Software Engineer Portfolio",
  description: "Computer Engineering student at University of Michigan specializing in full-stack development, machine learning, and DevOps. View my projects, experience, and skills.",
  keywords: ["software engineer", "full-stack developer", "React", "Java", "Python", "TypeScript", "University of Michigan", "Computer Engineering"],
  authors: [{ name: "Vijay Raju Nannapuraju" }],
  openGraph: {
    title: "Vijay Raju Nannapuraju - Software Engineer Portfolio",
    description: "Computer Engineering student at University of Michigan specializing in full-stack development, machine learning, and DevOps.",
    type: "website",
    locale: "en_US",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://vijayn7.dev" />
        <meta name="theme-color" content="#2c3e50" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${poppins.variable} antialiased`}
      >
        <noscript>
          <div style={{
            padding: '20px',
            textAlign: 'center',
            backgroundColor: '#f8f9fa',
            border: '2px solid #dee2e6',
            margin: '20px',
            borderRadius: '8px'
          }}>
            <h1>Vijay Raju Nannapuraju - Software Engineer Portfolio</h1>
            <h2>About Me</h2>
            <p>Hi, I&apos;m Vijay Raju Nannapuraju. I&apos;m a Computer Engineering student at the University of Michigan who enjoys turning ideas into reliable, scalable software.</p>
            
            <h2>Skills</h2>
            <p>React, Java, Python, TypeScript, JavaScript, Spring Boot, AWS, Docker, Kubernetes, and more</p>
            
            <h2>Experience</h2>
            <h3>APTIV - Software Engineer Intern (May 2025 – Aug 2025)</h3>
            <p>Reduced lead time by 31% via Kubernetes‑integrated metrics. Improved CI/CD observability with Datadog & Slack.</p>
            
            <h3>FIRST Robotics Competition - Lead Software Developer (Sep 2020 – Jun 2024)</h3>
            <p>Managed 32 developers in Java, debugging, and algorithm design. Reduced deployment failures by 88%.</p>
            
            <h2>Projects</h2>
            <h3>Raspberry Pi Photo Server</h3>
            <p>Developed a private photo/video server using Raspberry Pi with FastAPI backend and React Native app.</p>
            
            <h3>Digit Classifier Neural Network</h3>
            <p>Implemented a multi-layer neural network achieving 97%+ accuracy for handwritten digit classification.</p>
            
            <h2>Education</h2>
            <p>Bachelor of Engineering in Computer Engineering - University of Michigan (2024 - 2027)</p>
            
            <h2>Contact</h2>
            <p>Email: vijaynannapuraju@gmail.com</p>
            <p>GitHub: github.com/vijayn7</p>
            <p>LinkedIn: linkedin.com/in/vijayn7</p>
            
            <p><em>This website requires JavaScript for the full interactive experience. Please enable JavaScript in your browser to see the complete portfolio with animations and interactive features.</em></p>
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
