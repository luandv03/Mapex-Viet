import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
    faStore,
    faMagnifyingGlass,
    faBars,
    faX,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <div className="max-[768px]:px-2 px-10 flex w-full justify-between items-center h-24 border-b border-stone-400 bg-slate-950 text-white">
            <h4 className="max-[768px]:hidden">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        width={40}
                        height={40}
                        alt="Picture of the author"
                    ></Image>
                    <span className="text-xl font-semibold text-orange-400">
                        MAPEXVIET
                    </span>
                </Link>
            </h4>
            <div className="max-[768px]:ml-0 ml-7 text-sm ">
                <div className="h-full text-black relative">
                    <div className="flex">
                        <div>
                            <input
                                type="text"
                                placeholder="Nhà hàng, đồ gia dụng, chợ,.."
                                className="w-full border-solid-2 border-cyan-100 h-10 px-4 rounded-l-lg border outline-0"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Hai Bà Trưng, Hà Nội"
                                className="w-full border-solid-2 border-cyan-100 h-10 px-4 rounded-r-lg border-r border-y  outline-0"
                            />
                        </div>
                    </div>
                    <div className="w-10 absolute right-1 top-1 bottom-1 bg-black rounded-r-lg text-center p-2 hover:cursor-pointer">
                        <span className="text-white">
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className="h-full w-6"
                            />
                        </span>
                    </div>
                </div>

                <ul className="flex gap-2">
                    <li className="flex items-center space-x-1">
                        <span className=" text-sm tracking-tighter font-normal">
                            Dịch vụ ăn uống
                        </span>
                        <span>
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="w-3"
                            />
                        </span>
                    </li>
                    <li className="flex items-center space-x-1">
                        <span className=" text-sm tracking-tighter font-normal">
                            Dịch vụ gia đình
                        </span>
                        <span>
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="w-3"
                            />
                        </span>
                    </li>
                    <li className="flex items-center space-x-1">
                        <span className=" text-sm tracking-tighter font-normal">
                            Dịch vụ tiện ích
                        </span>
                        <span>
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="w-3"
                            />
                        </span>
                    </li>
                    <li className="flex items-center space-x-1">
                        <span className=" text-sm tracking-tighter font-normal">
                            Khác
                        </span>
                        <span>
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="w-3"
                            />
                        </span>
                    </li>
                </ul>
            </div>
            <div className="max-[1024px]:block min-[1023px]:hidden hover:opacity-90 hover:cursor-pointer px-1">
                <span>
                    <FontAwesomeIcon icon={faBars} className="w-5" />
                </span>
            </div>

            <div className="hidden fixed top-0 right-0 bottom-0 w-96 h-screen bg-white shadow-cyan-500 border-l">
                <div className="p-4 hover:cursor-pointer hover:opacity-80">
                    <span>
                        <FontAwesomeIcon
                            icon={faX}
                            className="w-4 text-slate-700"
                        />
                    </span>
                </div>
            </div>

            <div className="flex-2 max-[1024px]:hidden">
                <ul className="flex gap-2 justify-between ">
                    <li className=" hover:opacity-75 flex items-center h-full  text-white ">
                        <Link href="/#" className="flex items-center">
                            <span>
                                <FontAwesomeIcon
                                    icon={faStore}
                                    className="w-4"
                                />
                            </span>
                            <span className=" text-base font-medium ">
                                Dành cho cửa hàng
                            </span>
                        </Link>
                    </li>
                    <div className="border-r border-x-white"></div>
                    <li className=" hover:opacity-75  flex items-center  text-white">
                        <Link href="/about">
                            <span className=" text-base font-medium">
                                Giới thiệu
                            </span>
                        </Link>
                    </li>
                    <div className="border-r border-white"></div>

                    <li className=" hover:opacity-75  flex items-cente">
                        <Link href="/dashboard/login">
                            <span className=" text-base font-medium text-white ">
                                Đăng nhập
                            </span>
                        </Link>
                    </li>
                    <div className="border-r border-white"></div>
                    <li className=" hover:opacity-75  flex items-center whitespace-nowrap   text-white">
                        <Link href="/dashboard/register">
                            <span className=" text-base font-medium">
                                Đăng ký
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
