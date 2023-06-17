"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
    faStore,
    faMagnifyingGlass,
    faBars,
    faX,
    faUtensils,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

import "./navbar.css";

export default function Navbar() {
    const path = usePathname();

    return (
        <div className="w-full  bg-[#151A7B] min-h-[110px] text-white">
            <div className="flex w-full justify-between items-center min-h-[70px] max-[768px]:min-h-24 px-10  max-[768px]:px-2  h-full gap-12 max-[768px]:gap-4 max-[768px]:flex-1 max-[768px]:flex-wrap">
                {/* <div className="w-full flex min-[769px]:hidden justify-between">
                <h4>
                    <Link href="/" className="flex items-center ">
                        <span className="text-xs font-semibold text-orange-400">
                            MAPEXVIET
                        </span>
                    </Link>
                </h4>
                <div className="max-[1024px]:block  min-[1023px]:hidden hover:opacity-90 hover:cursor-pointer px-1">
                    <span>
                        <FontAwesomeIcon icon={faBars} className="w-5" />
                    </span>
                </div>
            </div> */}

                <h4 className="max-[768px]:hidden">
                    <Link href="/" className="flex items-center">
                        <span className="text-2xl font-semibold text-white">
                            MapexViet
                        </span>
                        <span>
                            <Image
                                src="/logo.png"
                                width={27}
                                height={27}
                                alt="logo"
                            />
                        </span>
                    </Link>
                </h4>
                <div className="max-[768px]:ml-0 ml-7 text-sm flex-1">
                    <div className="h-full text-black relative ">
                        <div className="flex max-[768px]:flex-wrap max-[768px]:gap-y-2">
                            <div className="flex-initial grow relative w-full">
                                <input
                                    type="text"
                                    placeholder="Nhà hàng, đồ gia dụng, chợ,.."
                                    className="search__product--input w-full border-solid-2 border-cyan-100 h-10 max-[768px]:h-7 px-4 rounded-l-md max-[768px]:rounded-md border outline-0 focus:rounded-bl-none"
                                />

                                <div className="search__product--results absolute top-full left-0 right-0  rounded-b-md bg-white shadow-bound-box z-10">
                                    <ul className="w-full p-4">
                                        <li className="h-9 p-1 hover:bg-gray-200 rounded-md hover:cursor-pointer">
                                            <div className="flex gap-4">
                                                <div>
                                                    <FontAwesomeIcon
                                                        icon={faClock}
                                                        className="h-full w-6"
                                                    />
                                                </div>
                                                <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                                                    <span className="text-sm">
                                                        Pizza
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="h-12 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer ">
                                            <div className="flex gap-4 h-full">
                                                <div className="h-full flex align-middle">
                                                    <img
                                                        src="https://s3-media0.fl.yelpcdn.com/bphoto/SAAOk2u3Bt5n9VP-8zSWiQ/o.jpg"
                                                        alt="Hello"
                                                        className="w-12 rounded-lg "
                                                    />
                                                </div>
                                                <div>
                                                    <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                                                        <p className="text-sm font-medium">
                                                            Nhà hàng hoàng gia
                                                            Anh
                                                        </p>
                                                        <span>
                                                            295, Trần Đại Nghĩa
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="h-9 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer ">
                                            <div className="flex gap-4">
                                                <div>
                                                    <FontAwesomeIcon
                                                        icon={faUtensils}
                                                        className="h-full w-6"
                                                    />
                                                </div>
                                                <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                                                    <span className="text-base">
                                                        Restaurants
                                                    </span>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="h-9 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer ">
                                            <div className="flex gap-4">
                                                <div>
                                                    <FontAwesomeIcon
                                                        icon={faUtensils}
                                                        className="h-full w-6"
                                                    />
                                                </div>
                                                <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                                                    <span className="text-base">
                                                        Restaurants
                                                    </span>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="h-9 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer ">
                                            <div className="flex gap-4">
                                                <div>
                                                    <FontAwesomeIcon
                                                        icon={faUtensils}
                                                        className="h-full w-6"
                                                    />
                                                </div>
                                                <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                                                    <span className="text-base">
                                                        Restaurants
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex-initial grow  relative w-full">
                                <input
                                    type="text"
                                    placeholder="Hai Bà Trưng, Hà Nội"
                                    className="search__location--input w-full  max-[768px]:rounded-md border-solid-2 border-cyan-100 h-10 max-[768px]:h-7 px-4 rounded-r-md border-r border-y outline-0 focus:rounded-br-none"
                                />

                                <div className="search__location--results absolute top-full left-0 right-0  rounded-b-sm bg-white shadow-bound-box z-10">
                                    <ul className="w-full p-4">
                                        <li className="h-9 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer">
                                            <div className="flex gap-4 text-blue-400">
                                                <div>
                                                    <FontAwesomeIcon
                                                        icon={faLocationDot}
                                                        className="h-full w-5 "
                                                    />
                                                </div>
                                                <div>
                                                    <span className="text-base">
                                                        Vị trí hiện tại
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="h-9 p-1 hover:bg-slate-200 rounded-lg hover:cursor-pointer">
                                            <div className="flex gap-4 ">
                                                <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                                                    <span className="text-base ">
                                                        Cổ Nhuế, Hà Nội
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="w-10 max-[768px]:hidden absolute right-1 top-1 bottom-1 bg-red-500 hover:opacity-80 rounded-r-md text-center p-2 hover:cursor-pointer">
                            <span className="text-white">
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlass}
                                    className="w-6"
                                />
                            </span>
                        </div>
                    </div>
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

                <div className="flex-2 max-[1024px]:hidden ">
                    <ul className="flex gap-4 justify-between ">
                        <li
                            className={clsx(
                                "hover:opacity-75 flex items-center   text-white  border-white",
                                "/stores" === path && "border-b-2"
                            )}
                        >
                            <Link href="/stores" className="flex items-center">
                                <span className=" text-base font-medium ">
                                    Mở cửa hàng
                                </span>
                            </Link>
                        </li>
                        <li
                            className={clsx(
                                " hover:opacity-75  flex items-center  text-white border-white",
                                "/about" === path && "border-b-2"
                            )}
                        >
                            <Link href="/about">
                                <span className=" text-base font-medium">
                                    Viết review
                                </span>
                            </Link>
                        </li>

                        <li
                            className={clsx(
                                " hover:opacity-75  flex items-cente"
                                // "/dashboard/login" === path && "border-b-2"
                            )}
                        >
                            <Link href="/dashboard/register">
                                <button className=" text-base font-medium text-white border-white rounded border p-2">
                                    Đăng ký
                                </button>
                            </Link>
                        </li>
                        <li
                            className={clsx(
                                " hover:opacity-75  flex items-center whitespace-nowrap   text-white bg-red-600 rounded  p-2"
                                // "/dashboard/register" === path && "border-b-2"
                            )}
                        >
                            <Link href="/dashboard/login">
                                <span className=" text-base font-medium">
                                    Đăng nhập
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="ml-[270px] ">
                <ul className="flex gap-6 max-[768px]:hidden">
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
        </div>
    );
}
