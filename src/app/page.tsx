import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
    faCarSide,
    faCarrot,
    faBagShopping,
    faUserDoctor,
    faPen,
    faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import {
    faHeart,
    faThumbsUp,
    faFaceSmile,
} from "@fortawesome/free-regular-svg-icons";
import clsx from "clsx";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className="w-full">
            <div className="w-full flex justify-center align-middle  ">
                {/* doan co may cai deo hieu */}
                <div className="w-full  p-10 flex justify-center items-center">
                    <div className="w-full">
                        <div className="w-full h-[228px]">
                            <div className="w-full h-full grid grid-rows-2 grid-cols-3 gap-2">
                                <div
                                    className={clsx(
                                        "col-span-2 row-span-2 hover:cursor-pointer relative",
                                        styles.slide
                                    )}
                                >
                                    <Image
                                        src="/banner_1.png"
                                        fill
                                        alt="banner"
                                    />
                                    <div
                                        className={clsx(
                                            "absolute h-10 w-6 text-white bg-[#0000002e] hover:opacity-80 flex items-center pl-3 py-3  left-0 top-1/2 -translate-y-1/2",
                                            styles.move__slide
                                        )}
                                    >
                                        <span>
                                            <FontAwesomeIcon
                                                icon={faChevronLeft}
                                                className="text-lg"
                                            />
                                        </span>
                                    </div>
                                    <div
                                        className={clsx(
                                            "absolute h-10 w-6 text-white bg-[#0000002e] hover:opacity-80 flex items-center py-3 right-0 top-1/2 -translate-y-1/2",
                                            styles.move__slide
                                        )}
                                    >
                                        <span>
                                            <FontAwesomeIcon
                                                icon={faChevronRight}
                                                className="text-lg"
                                            />
                                        </span>
                                    </div>
                                </div>
                                <div className="hover:cursor-pointer">
                                    <div className="w-full h-full relative">
                                        <Image
                                            src="/banner_2.png"
                                            fill
                                            alt="Banner_2"
                                        />
                                    </div>
                                </div>
                                <div className="bg-slate-500 hover:cursor-pointer">
                                    <div className="w-full h-full relative">
                                        <Image
                                            src="/banner_3.png"
                                            fill
                                            alt="Banner_3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* may cai icon linh tinh ben duoi */}
                        <div className="w-full h-[124px] flex items-center justify-center">
                            <ul className="h-full items-center flex justify-center gap-10">
                                <li className="w-[80px] h-[81px] hover:mb-[2px] hover:cursor-pointer">
                                    <div className="flex justify-center">
                                        <Image
                                            src="/radar.png"
                                            height={45}
                                            width={45}
                                            alt="seo"
                                            className="border p-2 border-red-400 rounded-md"
                                        />
                                    </div>
                                    <p className="text-base text-center">
                                        Ưu đãi gần hạn
                                    </p>
                                </li>

                                <li className="w-[80px] h-[81px] hover:mb-[2px] hover:cursor-pointer">
                                    <div className="flex justify-center">
                                        <Image
                                            src="/electric_bolt.png"
                                            height={45}
                                            width={45}
                                            alt="seo"
                                            className="border p-2 border-red-400 rounded-md"
                                        />
                                    </div>
                                    <p className="text-base text-center">
                                        Super flash sales
                                    </p>
                                </li>
                                <li className="w-[80px] h-[81px] hover:mb-[2px] hover:cursor-pointer">
                                    <div className="flex justify-center">
                                        <Image
                                            src="/storefront.png"
                                            height={45}
                                            width={45}
                                            alt="seo"
                                            className="border p-2 border-red-400 rounded-md"
                                        />
                                    </div>
                                    <p className="text-base text-center">
                                        Đặt chỗ
                                    </p>
                                </li>
                                <li className="w-[80px] h-[81px] hover:mb-[2px] hover:cursor-pointer">
                                    <div className="flex justify-center">
                                        <Image
                                            src="/local_activity.png"
                                            height={45}
                                            width={45}
                                            alt="seo"
                                            className="border p-2 border-red-400 rounded-md"
                                        />
                                    </div>
                                    <p className="text-base text-center">
                                        Voucher của tôi
                                    </p>
                                </li>
                                <li className="w-[80px] h-[81px] hover:mb-[2px] hover:cursor-pointer">
                                    <div className="flex justify-center">
                                        <Image
                                            src="/favorite.png"
                                            height={45}
                                            width={45}
                                            alt="seo"
                                            className="border p-2 border-red-400 rounded-md"
                                        />
                                    </div>
                                    <p className="text-base text-center">
                                        Cửa hàng yêu thích
                                    </p>
                                </li>
                                <li className="w-[80px] h-[81px] hover:mb-[2px] hover:cursor-pointer">
                                    <div className="flex justify-center">
                                        <Image
                                            src="/send.png"
                                            height={45}
                                            width={45}
                                            alt="seo"
                                            className="border p-2 border-red-400 rounded-md"
                                        />
                                    </div>
                                    <p className="text-base text-center">
                                        Bài viết chia sẻ
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-100 pb-9 px-10">
                <div className="w-full text-center my-3">
                    <h3 className="text-lg font-semibold">Danh mục</h3>
                </div>
                <div className="w-full flex justify-center ">
                    <div className="w-full grid grid-cols-5 gap-4">
                        <div className="h-[104px] w-[224px] bg-white border border-red-200 rounded-sm hover:cursor-pointer hover:shadow-bound-box-hover hover:border-none ">
                            <div className="w-full h-full flex justify-center items-center">
                                <div className="flex ">
                                    <div className="w-[80px] h-[80px]">
                                        <Image
                                            src="/fashion.png"
                                            width={80}
                                            height={80}
                                            alt="thoitrang"
                                        />
                                    </div>
                                    <div className="flex items-center h-[80px]">
                                        <p className="text-base font-semibold">
                                            Thời trang
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[104px] w-[224px] bg-white border border-red-200 rounded-sm hover:cursor-pointer hover:shadow-bound-box-hover hover:border-none ">
                            <div className="w-full h-full flex justify-center items-center">
                                <div className="flex">
                                    <div className="w-[80px] h-[80px]">
                                        <Image
                                            src="/make_up.png"
                                            width={80}
                                            height={80}
                                            alt="lamdep"
                                        />
                                    </div>
                                    <div className="flex items-center h-[80px]">
                                        <p className="text-base font-semibold">
                                            Làm đẹp
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[104px] w-[224px] bg-white border border-red-200 rounded-sm hover:cursor-pointer hover:shadow-bound-box-hover hover:border-none ">
                            <div className="w-full h-full flex justify-center items-center">
                                <div className="flex">
                                    <div className="w-[80px] h-[80px]">
                                        <Image
                                            src="/vegetable.png"
                                            width={80}
                                            height={80}
                                            alt="thucpham"
                                        />
                                    </div>
                                    <div className="flex items-center h-[80px]">
                                        <p className="text-base font-semibold">
                                            Thực phẩm
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[104px] w-[224px] bg-white border border-red-200 rounded-sm hover:cursor-pointer hover:shadow-bound-box-hover hover:border-none ">
                            <div className="w-full h-full flex justify-center items-center">
                                <div className="flex">
                                    <div className="w-[80px] h-[80px]">
                                        <Image
                                            src="/restaurant.png"
                                            width={80}
                                            height={80}
                                            alt="lamdep"
                                        />
                                    </div>
                                    <div className="flex items-center h-[80px]">
                                        <p className="text-base font-semibold">
                                            Nhà hàng
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[104px] w-[224px] bg-white border border-red-200 rounded-sm hover:cursor-pointer hover:shadow-bound-box-hover hover:border-none ">
                            <div className="w-full h-full flex justify-center items-center">
                                <div className="flex">
                                    <div className="w-[80px] h-[80px]">
                                        <Image
                                            src="/furniture.png"
                                            width={80}
                                            height={80}
                                            alt="lamdep"
                                        />
                                    </div>
                                    <div className="flex items-center h-[80px]">
                                        <p className="text-base font-semibold">
                                            Gia dụng nội thất
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[104px] w-[224px] bg-white border border-red-200 rounded-sm hover:cursor-pointer hover:shadow-bound-box-hover hover:border-none ">
                            <div className="w-full h-full flex justify-center items-center">
                                <div className="flex">
                                    <div className="w-[80px] h-[80px]">
                                        <Image
                                            src="/eletric.png"
                                            width={80}
                                            height={80}
                                            alt="lamdep"
                                        />
                                    </div>
                                    <div className="flex items-center h-[80px]">
                                        <span className="text-base font-semibold">
                                            Thiết bị điện tử
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[104px] w-[224px] bg-white border border-red-200 rounded-sm hover:cursor-pointer hover:shadow-bound-box-hover hover:border-none ">
                            <div className="w-full h-full flex justify-center  items-center">
                                <div className="flex">
                                    <div className="w-[80px] h-[80px]">
                                        <Image
                                            src="/vehicle.png"
                                            width={80}
                                            height={80}
                                            alt="lamdep"
                                        />
                                    </div>
                                    <div className="flex items-center h-[80px]">
                                        <p className="text-base font-semibold">
                                            Xe cộ
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[104px] w-[224px] bg-white border border-red-200 rounded-sm hover:cursor-pointer hover:shadow-bound-box-hover hover:border-none ">
                            <div className="w-full h-full flex justify-center items-center">
                                <div className="flex">
                                    <div className="w-[80px] h-[80px]">
                                        <Image
                                            src="/office.png"
                                            width={80}
                                            height={80}
                                            alt="lamdep"
                                        />
                                    </div>
                                    <div className="flex items-center h-[80px]">
                                        <p className="text-base font-semibold">
                                            Văn phòng phẩm
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[104px] w-[224px] bg-white border border-red-200 rounded-sm hover:cursor-pointer hover:shadow-bound-box-hover hover:border-none ">
                            <div className="w-full h-full flex justify-center items-center">
                                <div className="flex">
                                    <div className="w-[80px] h-[80px]">
                                        <Image
                                            src="/detail.png"
                                            width={80}
                                            height={80}
                                            alt="lamdep"
                                        />
                                    </div>
                                    <div className="flex items-center h-[80px]">
                                        <p className="text-base font-semibold">
                                            Sửa chữa
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[104px] w-[224px] bg-white border border-red-200 rounded-sm hover:cursor-pointer hover:shadow-bound-box-hover hover:border-none ">
                            <div className="w-full h-full flex justify-center items-center">
                                <div className="">
                                    <div className=" text-center text-2xl block text-red-600">
                                        <FontAwesomeIcon icon={faEllipsis} />
                                    </div>
                                    <p className="text-base font-semibold ">
                                        Khác
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Ưu đãi gần bạn */}
            <div className="py-4 w-full bg-gray-100 px-24 flex justify-center items-center">
                <div>
                    <div className="w-full">
                        <div>
                            <h4 className="text-lg font-semibold">
                                Ưu đãi gần bạn
                            </h4>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="grid grid-flow-col  grid-rows-1 gap-4">
                            <div className="h-[344px] w-[224px] border flex-col hover:cursor-pointer hover:shadow-bound-box-hover">
                                <div className="w-full">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReOnvfUgxaljd-j6Ojbt0Jz5uki4weTL9UzRc8sY7TPQ&s"
                                        alt="routine chùa bộc"
                                        className="w-full h-[230.33px] object-cover"
                                    />
                                </div>
                                <div className="w-full p-4 bg-white flex-1">
                                    <h3 className="text-base font-medium">
                                        Routine Chùa Bộc
                                    </h3>
                                    <div className="w-full flex gap-1">
                                        <span className="text-sm font-normal">
                                            Cửa hàng quần áo Nam & Nữ
                                        </span>

                                        <span className="text-sm font-medium">
                                            4,5
                                        </span>

                                        <span className="text-sm text-yellow-400">
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className="text-sm text-gray-400">
                                            (130)
                                        </span>
                                    </div>
                                    <div className="w-full flex gap-1">
                                        <button className="text-xs font-normal border bg-gray-400 rounded-full block">
                                            Sale up to 50%
                                        </button>
                                        <button className="text-xs font-normal border bg-gray-400 rounded-full">
                                            Quà khai trương
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[344px] w-[224px] border flex-col hover:cursor-pointer hover:shadow-bound-box-hover">
                                <div className="w-full">
                                    <img
                                        src="https://lh3.googleusercontent.com/p/AF1QipMsYBkYGoSZcxwA2V2d0ZxjAnR8su99msjjLt9W=s1360-w1360-h1020"
                                        alt="routine chùa bộc"
                                        className="w-full h-[230.33px] object-cover"
                                    />
                                </div>
                                <div className="w-full p-4 bg-white flex-1">
                                    <h3 className="text-base font-medium">
                                        Canifa Đông Quan
                                    </h3>
                                    <div className="w-full flex gap-1">
                                        <span className="text-sm font-normal">
                                            Cửa hàng quần áo
                                        </span>

                                        <span className="text-sm font-medium">
                                            4,5
                                        </span>

                                        <span className="text-sm text-yellow-400">
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className="text-sm text-gray-400">
                                            (130)
                                        </span>
                                    </div>
                                    <div className="w-full flex gap-1">
                                        <button className=" text-xs font-normal border bg-gray-400 rounded-full block">
                                            Sale up to 50%
                                        </button>
                                        <button className=" text-xs font-normal border bg-gray-400 rounded-full">
                                            Quà khai trương
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[344px] w-[224px] border flex-col hover:cursor-pointer hover:shadow-bound-box-hover">
                                <div className="w-full">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReOnvfUgxaljd-j6Ojbt0Jz5uki4weTL9UzRc8sY7TPQ&s"
                                        alt="routine chùa bộc"
                                        className="w-full h-[230.33px] object-cover"
                                    />
                                </div>
                                <div className="w-full p-4 bg-white flex-1">
                                    <h3 className="text-base font-medium">
                                        Routine Chùa Bộc
                                    </h3>
                                    <div className="w-full flex gap-1">
                                        <span className="text-sm font-normal">
                                            Cửa hàng quần áo Nam & Nữ
                                        </span>

                                        <span className="text-sm font-medium">
                                            4,5
                                        </span>

                                        <span className="text-sm text-yellow-400">
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className="text-sm text-gray-400">
                                            (130)
                                        </span>
                                    </div>
                                    <div className="w-full flex gap-1">
                                        <button className="text-xs font-normal border bg-gray-400 rounded-full block">
                                            Sale up to 50%
                                        </button>
                                        <button className="text-xs font-normal border bg-gray-400 rounded-full">
                                            Quà khai trương
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[344px] w-[224px] border flex-col hover:cursor-pointer hover:shadow-bound-box-hover">
                                <div className="w-full">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReOnvfUgxaljd-j6Ojbt0Jz5uki4weTL9UzRc8sY7TPQ&s"
                                        alt="routine chùa bộc"
                                        className="w-full h-[230.33px] object-cover"
                                    />
                                </div>
                                <div className="w-full p-4 bg-white flex-1">
                                    <h3 className="text-base font-medium">
                                        Routine Chùa Bộc
                                    </h3>
                                    <div className="w-full flex gap-1">
                                        <span className="text-sm font-normal">
                                            Cửa hàng quần áo Nam & Nữ
                                        </span>

                                        <span className="text-sm font-medium">
                                            4,5
                                        </span>

                                        <span className="text-sm text-yellow-400">
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className="text-sm text-gray-400">
                                            (130)
                                        </span>
                                    </div>
                                    <div className="w-full flex gap-1">
                                        <button className="text-xs font-normal border bg-gray-400 rounded-full block">
                                            Sale up to 50%
                                        </button>
                                        <button className="text-xs font-normal border bg-gray-400 rounded-full">
                                            Quà khai trương
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[344px] w-[224px] border flex-col hover:cursor-pointer hover:shadow-bound-box-hover">
                                <div className="w-full">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReOnvfUgxaljd-j6Ojbt0Jz5uki4weTL9UzRc8sY7TPQ&s"
                                        alt="routine chùa bộc"
                                        className="w-full h-[230.33px] object-cover"
                                    />
                                </div>
                                <div className="w-full p-4 bg-white flex-1">
                                    <h3 className="text-base font-medium">
                                        Routine Chùa Bộc
                                    </h3>
                                    <div className="w-full flex gap-1">
                                        <span className="text-sm font-normal">
                                            Cửa hàng quần áo Nam & Nữ
                                        </span>

                                        <span className="text-sm font-medium">
                                            4,5
                                        </span>

                                        <span className="text-sm text-yellow-400">
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className="text-sm text-gray-400">
                                            (130)
                                        </span>
                                    </div>
                                    <div className="w-full flex gap-1">
                                        <button className="text-xs font-normal border bg-gray-400 rounded-full block">
                                            Sale up to 50%
                                        </button>
                                        <button className="text-xs font-normal border bg-gray-400 rounded-full">
                                            Quà khai trương
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Super Flash sale */}
            <div className="py-10 w-full bg-gray-100 px-24 flex justify-center items-center mt-4">
                <div>
                    <div className="w-full">
                        <div>
                            <h4 className="text-lg font-semibold">
                                Super Flash Sale
                            </h4>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="grid grid-flow-col  grid-rows-1 gap-4">
                            <div className="h-[344px] w-[224px] border flex-col hover:cursor-pointer hover:shadow-bound-box-hover">
                                <div className="w-full">
                                    <img
                                        src="https://atomauto.vn/wp-content/uploads/2021/12/Atom_B7A0437-1-e1639680177333.jpg"
                                        alt="garage ô tô"
                                        className="w-full h-[230.33px] object-cover"
                                    />
                                </div>
                                <div className="w-full p-4 bg-white flex-1">
                                    <h3 className="text-base font-medium">
                                        Kiểm tra ô tô định kỳ
                                    </h3>
                                    <div className="w-full flex gap-1">
                                        <span className="text-sm font-normal">
                                            Garage ô tô Quang Đức
                                        </span>

                                        <span className="text-sm font-light">
                                            4,5
                                        </span>

                                        <span className="text-sm text-yellow-400">
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className="text-sm text-gray-400">
                                            (130)
                                        </span>
                                    </div>
                                    <div className="w-full ">
                                        <span className="text-blue-800 text-lg font-semibold">
                                            1.500.000đ
                                        </span>
                                        <span className="text-sm line-through ml-1">
                                            2.500.000đ
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[344px] w-[224px] border flex-col hover:cursor-pointer hover:shadow-bound-box-hover">
                                <div className="w-full">
                                    <img
                                        src="https://agiupviec.vn/wp-content/uploads/2020/12/dien-nuoc.png"
                                        alt="garage ô tô"
                                        className="w-full h-[230.33px] object-cover"
                                    />
                                </div>
                                <div className="w-full p-4 bg-white flex-1">
                                    <h3 className="text-base font-medium">
                                        Sửa điều hoà
                                    </h3>
                                    <div className="w-full flex gap-1">
                                        <span className="text-sm font-normal">
                                            Đồ điện Quang Vinh
                                        </span>

                                        <span className="text-sm font-light">
                                            3,6
                                        </span>

                                        <span className="text-sm text-yellow-400">
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className="text-sm text-gray-400">
                                            (428)
                                        </span>
                                    </div>
                                    <div className="w-full ">
                                        <span className="text-blue-800 text-lg font-semibold">
                                            500.000đ
                                        </span>
                                        <span className="text-sm line-through ml-1">
                                            600.000đ
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[344px] w-[224px] border flex-col hover:cursor-pointer hover:shadow-bound-box-hover">
                                <div className="w-full">
                                    <img
                                        src="https://agiupviec.vn/wp-content/uploads/2020/12/dien-may-3.png"
                                        alt="garage ô tô"
                                        className="w-full h-[230.33px] object-cover"
                                    />
                                </div>
                                <div className="w-full p-4 bg-white flex-1">
                                    <h3 className="text-base font-medium">
                                        Dọn nhà 60m
                                    </h3>
                                    <div className="w-full flex gap-1">
                                        <span className="text-sm font-normal">
                                            Công ty giúp việc Minh Anh
                                        </span>

                                        <span className="text-sm font-light">
                                            3,9
                                        </span>

                                        <span className="text-sm text-yellow-400">
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className="text-sm text-gray-400">
                                            (254)
                                        </span>
                                    </div>
                                    <div className="w-full ">
                                        <span className="text-blue-800 text-lg font-semibold">
                                            200.000đ
                                        </span>
                                        <span className="text-sm line-through ml-1">
                                            250.000đ
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[344px] w-[224px] border flex-col hover:cursor-pointer hover:shadow-bound-box-hover">
                                <div className="w-full">
                                    <img
                                        src="https://atomauto.vn/wp-content/uploads/2021/12/Atom_B7A0437-1-e1639680177333.jpg"
                                        alt="garage ô tô"
                                        className="w-full h-[230.33px] object-cover"
                                    />
                                </div>
                                <div className="w-full p-4 bg-white flex-1">
                                    <h3 className="text-base font-medium">
                                        Kiểm tra ô tô định kỳ
                                    </h3>
                                    <div className="w-full flex gap-1">
                                        <span className="text-sm font-normal">
                                            Garage ô tô Quang Đức
                                        </span>

                                        <span className="text-sm font-light">
                                            4,5
                                        </span>

                                        <span className="text-sm text-yellow-400">
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className="text-sm text-gray-400">
                                            (130)
                                        </span>
                                    </div>
                                    <div className="w-full ">
                                        <span className="text-blue-800 text-lg font-semibold">
                                            1.500.000đ
                                        </span>
                                        <span className="text-sm line-through ml-1">
                                            2.500.000đ
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[344px] w-[224px] border flex-col hover:cursor-pointer hover:shadow-bound-box-hover">
                                <div className="w-full">
                                    <img
                                        src="https://atomauto.vn/wp-content/uploads/2021/12/Atom_B7A0437-1-e1639680177333.jpg"
                                        alt="garage ô tô"
                                        className="w-full h-[230.33px] object-cover"
                                    />
                                </div>
                                <div className="w-full p-4 bg-white flex-1">
                                    <h3 className="text-base font-medium">
                                        Kiểm tra ô tô định kỳ
                                    </h3>
                                    <div className="w-full flex gap-1">
                                        <span className="text-sm font-normal">
                                            Garage ô tô Quang Đức
                                        </span>

                                        <span className="text-sm font-light">
                                            4,5
                                        </span>

                                        <span className="text-sm text-yellow-400">
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className="text-sm text-gray-400">
                                            (130)
                                        </span>
                                    </div>
                                    <div className="w-full ">
                                        <span className="text-blue-800 text-lg font-semibold">
                                            1.500.000đ
                                        </span>
                                        <span className="text-sm line-through ml-1">
                                            2.500.000đ
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feedback shared */}
            <div className="w-full mt-4 px-10">
                <div className="w-full text-center">
                    <h1 className="text-3xl font-semibold">
                        Bài viết đánh giá
                    </h1>
                </div>
                <div className="w-full flex justify-center mt-4">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="w-[359.98px] h-[376px]  border border-gray-200">
                            <div className="w-full p-4 flex ">
                                <div className="w-12 h-full">
                                    <img
                                        src="https://s3-media0.fl.yelpcdn.com/photo/CXwJarDMUiZDkZVuuhVVOQ/ss.jpg"
                                        alt="avatar"
                                        className="w-[50px] h-[44px] rounded-full"
                                    />
                                </div>
                                <div className="flex-1 h-full ml-2">
                                    <span className="text-base font-semibold block hover:cursor-pointer hover:underline">
                                        Tony
                                    </span>
                                    <span className="text-sm">Đã đánh giá</span>
                                </div>
                            </div>

                            <div className="w-full">
                                <img
                                    src="https://s3-media0.fl.yelpcdn.com/bphoto/_RtUQRH67TJlUaGddd93tA/300s.jpg"
                                    alt="anh mon an nha hang"
                                    className="w-full max-h-20 object-cover"
                                />
                            </div>

                            <div className="w-full p-4 border-b border-gray-300 ">
                                <div className="w-full mt-2">
                                    <h4 className="text-base font-semibold ">
                                        Món này thực sự rất ngon
                                    </h4>
                                </div>

                                <div className="w-full">
                                    <div className="flex items-center gap-1 w-full">
                                        <div className="flex">
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-gray-400"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <span className="text-sm line-clamp-2">
                                        I really dig the Palmetto in Burlingame
                                        so it was great to see one close to my
                                        work in Palo Alto that is so very good
                                    </span>

                                    <div className="w-full">
                                        <Link href="#">
                                            <span className="hover:underline text-base font-medium text-blue-500">
                                                Đọc thêm
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Icon cảm xúc */}
                            <div className="w-full p-4 flex gap-4">
                                <div className="w-10 h-10 rounded-full hover:bg-slate-200 hover:cursor-pointer flex justify-center items-center">
                                    <span className=" text-2xl">
                                        <FontAwesomeIcon icon={faThumbsUp} />
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-full hover:bg-slate-200 hover:cursor-pointer flex justify-center items-center">
                                    <span className=" text-2xl">
                                        <FontAwesomeIcon icon={faFaceSmile} />
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-full hover:bg-slate-200 hover:cursor-pointer flex justify-center items-center">
                                    <span className=" text-2xl">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="w-[359.98px] h-[376px]  border border-gray-200">
                            <div className="w-full p-4 flex ">
                                <div className="w-12 h-full">
                                    <Image
                                        src="/avatar.png"
                                        alt="avatar"
                                        width={50}
                                        height={44}
                                    />
                                </div>
                                <div className="flex-1 h-full ml-2">
                                    <span className="text-base font-semibold block hover:cursor-pointer hover:underline">
                                        Lisa
                                    </span>
                                    <span className="text-sm">Đã đánh giá</span>
                                </div>
                            </div>

                            <div className="w-full">
                                <img
                                    src="https://s3-media0.fl.yelpcdn.com/bphoto/zJzh2Uv4Atcc31yCmGMhSA/o.jpg"
                                    alt="anh mon an nha hang"
                                    className="w-full max-h-20 object-cover"
                                />
                            </div>

                            <div className="w-full p-4 border-b border-gray-300 ">
                                <div className="w-full mt-2">
                                    <h4 className="text-base font-semibold ">
                                        Phòng ở đây có view rất đẹp
                                    </h4>
                                </div>

                                <div className="w-full">
                                    <div className="flex items-center gap-1 w-full">
                                        <div className="flex">
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-gray-400"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <span className="text-sm line-clamp-2">
                                        I really dig the Palmetto in Burlingame
                                        so it was great to see one close to my
                                        work in Palo Alto that is so very good
                                    </span>

                                    <div className="w-full">
                                        <Link href="#">
                                            <span className="hover:underline text-base font-medium text-blue-500">
                                                Đọc thêm
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Icon cảm xúc */}
                            <div className="w-full p-4 flex gap-4">
                                <div className="w-10 h-10 rounded-full hover:bg-slate-200 hover:cursor-pointer flex justify-center items-center">
                                    <span className=" text-2xl">
                                        <FontAwesomeIcon icon={faThumbsUp} />
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-full hover:bg-slate-200 hover:cursor-pointer flex justify-center items-center">
                                    <span className=" text-2xl">
                                        <FontAwesomeIcon icon={faFaceSmile} />
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-full hover:bg-slate-200 hover:cursor-pointer flex justify-center items-center">
                                    <span className=" text-2xl">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="w-[359.98px] h-[376px]  border border-gray-200">
                            <div className="w-full p-4 flex ">
                                <div className="w-12 h-full">
                                    <Image
                                        src="/avatar.png"
                                        alt="avatar"
                                        width={50}
                                        height={44}
                                    />
                                </div>
                                <div className="flex-1 h-full ml-2">
                                    <span className="text-base font-semibold block hover:cursor-pointer hover:underline">
                                        lisa
                                    </span>
                                    <span className="text-sm">Đã đánh giá</span>
                                </div>
                            </div>

                            <div className="w-full">
                                <img
                                    src="https://s3-media0.fl.yelpcdn.com/bphoto/_RtUQRH67TJlUaGddd93tA/300s.jpg"
                                    alt="anh mon an nha hang"
                                    className="w-full max-h-20 object-cover"
                                />
                            </div>

                            <div className="w-full p-4 border-b border-gray-300 ">
                                <div className="w-full mt-2">
                                    <h4 className="text-base font-semibold ">
                                        Đây là 1 món vô cùng tuyệt vời
                                    </h4>
                                </div>

                                <div className="w-full">
                                    <div className="flex items-center gap-1 w-full">
                                        <div className="flex">
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-gray-400"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <span className="text-sm line-clamp-2">
                                        I really dig the Palmetto in Burlingame
                                        so it was great to see one close to my
                                        work in Palo Alto that is so very good
                                    </span>

                                    <div className="w-full">
                                        <Link href="#">
                                            <span className="hover:underline text-base font-medium text-blue-500">
                                                Đọc thêm
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Icon cảm xúc */}
                            <div className="w-full p-4 flex gap-4">
                                <div className="w-10 h-10 rounded-full hover:bg-slate-200 hover:cursor-pointer flex justify-center items-center">
                                    <span className=" text-2xl">
                                        <FontAwesomeIcon icon={faThumbsUp} />
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-full hover:bg-slate-200 hover:cursor-pointer flex justify-center items-center">
                                    <span className=" text-2xl">
                                        <FontAwesomeIcon icon={faFaceSmile} />
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-full hover:bg-slate-200 hover:cursor-pointer flex justify-center items-center">
                                    <span className=" text-2xl">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="w-[359.98px] h-[376px]  border border-gray-200">
                            <div className="w-full p-4 flex ">
                                <div className="w-12 h-full">
                                    <Image
                                        src="/avatar.png"
                                        alt="avatar"
                                        width={50}
                                        height={44}
                                    />
                                </div>
                                <div className="flex-1 h-full ml-2">
                                    <span className="text-base font-semibold block hover:cursor-pointer hover:underline">
                                        lisa
                                    </span>
                                    <span className="text-sm">Đã đánh giá</span>
                                </div>
                            </div>

                            <div className="w-full">
                                <img
                                    src="https://s3-media0.fl.yelpcdn.com/bphoto/_RtUQRH67TJlUaGddd93tA/300s.jpg"
                                    alt="anh mon an nha hang"
                                    className="w-full max-h-20 object-cover"
                                />
                            </div>

                            <div className="w-full p-4 border-b border-gray-300 ">
                                <div className="w-full mt-2">
                                    <h4 className="text-base font-semibold ">
                                        Day la mon an ngon nhat Viet Nam
                                    </h4>
                                </div>

                                <div className="w-full">
                                    <div className="flex items-center gap-1 w-full">
                                        <div className="flex">
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-gray-400"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <span className="text-sm line-clamp-2">
                                        I really dig the Palmetto in Burlingame
                                        so it was great to see one close to my
                                        work in Palo Alto that is so very good
                                    </span>

                                    <div className="w-full">
                                        <Link href="#">
                                            <span className="hover:underline text-base font-medium text-blue-500">
                                                Đọc thêm
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Icon cảm xúc */}
                            <div className="w-full p-4 flex gap-4">
                                <div className="w-10 h-10 rounded-full hover:bg-slate-200 hover:cursor-pointer flex justify-center items-center">
                                    <span className=" text-2xl">
                                        <FontAwesomeIcon icon={faThumbsUp} />
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-full hover:bg-slate-200 hover:cursor-pointer flex justify-center items-center">
                                    <span className=" text-2xl">
                                        <FontAwesomeIcon icon={faFaceSmile} />
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-full hover:bg-slate-200 hover:cursor-pointer flex justify-center items-center">
                                    <span className=" text-2xl">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="w-[359.98px] h-[376px]  border border-gray-200">
                            <div className="w-full p-4 flex ">
                                <div className="w-12 h-full">
                                    <Image
                                        src="/avatar.png"
                                        alt="avatar"
                                        width={50}
                                        height={44}
                                    />
                                </div>
                                <div className="flex-1 h-full ml-2">
                                    <span className="text-base font-semibold block hover:cursor-pointer hover:underline">
                                        lisa
                                    </span>
                                    <span className="text-sm">Đã đánh giá</span>
                                </div>
                            </div>

                            <div className="w-full">
                                <img
                                    src="https://s3-media0.fl.yelpcdn.com/bphoto/_RtUQRH67TJlUaGddd93tA/300s.jpg"
                                    alt="anh mon an nha hang"
                                    className="w-full max-h-20 object-cover"
                                />
                            </div>

                            <div className="w-full p-4 border-b border-gray-300 ">
                                <div className="w-full mt-2">
                                    <h4 className="text-base font-semibold ">
                                        Day la mon an ngon nhat Viet Nam
                                    </h4>
                                </div>

                                <div className="w-full">
                                    <div className="flex items-center gap-1 w-full">
                                        <div className="flex">
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-gray-400"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <span className="text-sm line-clamp-2">
                                        I really dig the Palmetto in Burlingame
                                        so it was great to see one close to my
                                        work in Palo Alto that is so very good
                                    </span>

                                    <div className="w-full">
                                        <Link href="#">
                                            <span className="hover:underline text-base font-medium text-blue-500">
                                                Đọc thêm
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Icon cảm xúc */}
                            <div className="w-full p-4 flex gap-4">
                                <div className="w-10 h-10 rounded-full hover:bg-slate-200 hover:cursor-pointer flex justify-center items-center">
                                    <span className=" text-2xl">
                                        <FontAwesomeIcon icon={faThumbsUp} />
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-full hover:bg-slate-200 hover:cursor-pointer flex justify-center items-center">
                                    <span className=" text-2xl">
                                        <FontAwesomeIcon icon={faFaceSmile} />
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-full hover:bg-slate-200 hover:cursor-pointer flex justify-center items-center">
                                    <span className=" text-2xl">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="w-[359.98px] h-[376px]  border border-gray-200">
                            <div className="w-full p-4 flex ">
                                <div className="w-12 h-full">
                                    <Image
                                        src="/avatar.png"
                                        alt="avatar"
                                        width={50}
                                        height={44}
                                    />
                                </div>
                                <div className="flex-1 h-full ml-2">
                                    <span className="text-base font-semibold block hover:cursor-pointer hover:underline">
                                        lisa
                                    </span>
                                    <span className="text-sm">Đã đánh giá</span>
                                </div>
                            </div>

                            <div className="w-full">
                                <img
                                    src="https://s3-media0.fl.yelpcdn.com/bphoto/_RtUQRH67TJlUaGddd93tA/300s.jpg"
                                    alt="anh mon an nha hang"
                                    className="w-full max-h-20 object-cover"
                                />
                            </div>

                            <div className="w-full p-4 border-b border-gray-300 ">
                                <div className="w-full mt-2">
                                    <h4 className="text-base font-semibold ">
                                        Day la mon an ngon nhat Viet Nam
                                    </h4>
                                </div>

                                <div className="w-full">
                                    <div className="flex items-center gap-1 w-full">
                                        <div className="flex">
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-yellow-400"
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="w-[22px] h-[22px] text-gray-400"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <span className="text-sm line-clamp-2">
                                        I really dig the Palmetto in Burlingame
                                        so it was great to see one close to my
                                        work in Palo Alto that is so very good
                                    </span>

                                    <div className="w-full">
                                        <Link href="#">
                                            <span className="hover:underline text-base font-medium text-blue-500">
                                                Đọc thêm
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Icon cảm xúc */}
                            <div className="w-full p-4 flex gap-4">
                                <div className="w-10 h-10 rounded-full hover:bg-slate-200 hover:cursor-pointer flex justify-center items-center">
                                    <span className=" text-2xl">
                                        <FontAwesomeIcon icon={faThumbsUp} />
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-full hover:bg-slate-200 hover:cursor-pointer flex justify-center items-center">
                                    <span className=" text-2xl">
                                        <FontAwesomeIcon icon={faFaceSmile} />
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-full hover:bg-slate-200 hover:cursor-pointer flex justify-center items-center">
                                    <span className=" text-2xl">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
