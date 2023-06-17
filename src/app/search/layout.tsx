import { ReactNode } from "react";

export default function SearchLayout({ children }: { children: ReactNode }) {
    return <main className=" w-full">{children}</main>;
}
