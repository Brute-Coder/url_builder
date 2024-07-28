
import Link from "next/link"

export default function Hero() {
    return (
        <div className="w-full max-w-2xl mx-auto py-12 md:py-16 lg:py-20">
            <div className="text-center space-y-8">
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Build <span className=" text-cyan-600">Marketing</span> URL</h1>
                <p className="text-muted-foreground text-base">Get started by selecting a category below and  generate custom marketing URL.</p>
            </div>
            <div className="mt-8 grid gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-sm:px-6">
                    <Link
                        href="/tradewise"
                        className="group flex items-center justify-between rounded-lg bg-muted p-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                    >
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-blue-600 ">Tradewise</h3>
                            <p className="text-sm text-muted-foreground">Generate URLs for tradewiseapp.com</p>
                        </div>
                        <ArrowRightIcon className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
                    </Link>
                    <Link
                        href="/astrolearn"
                        className="group flex items-center justify-between rounded-lg bg-muted p-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                    >
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-orange-500">Astrolearn</h3>
                            <p className="text-sm text-muted-foreground">Generate URLs for astrolearn.co</p>
                        </div>
                        <ArrowRightIcon className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
                    </Link>
                </div>
                <div className="flex items-center justify-center">
                    <Link
                        href="/healoved"
                        className="group flex items-center justify-between rounded-lg bg-muted p-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                    >
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-green-600">Healoved</h3>
                            <p className="text-sm text-muted-foreground">Generate URLs for healoved.com</p>
                        </div>
                        <ArrowRightIcon className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}


function XIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}