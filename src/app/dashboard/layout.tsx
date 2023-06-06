import Image from "next/image";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex justify-center">
            <div className="">{children}</div>
            <div className="flex-1 relative max-[768px]:hidden ">
                <Image
                    src="/auth.jpg"
                    fill
                    object-fit="contain"
                    alt="Layout Authentication"
                ></Image>
            </div>
        </main>
    );
}
