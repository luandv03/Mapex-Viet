import { faComment, faStar } from "@fortawesome/free-regular-svg-icons";
import {
    faStar as faStarSolid,
    faCheck,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Map from "@/components/map/Map";

export default function SearchPage() {
    return (
        <div className="flex flex-row max-[768px]:px-2 pl-10 w-full">
            <div className="basis-8/12 pr-10 mt-6">
                <div className="w-full ">
                    <div className="flex justify-between mb-5">
                        <div>
                            <h2 className="text-2xl font-extrabold">
                                Nhà hàng xịn nhất ở 295 Bạch Mai
                            </h2>
                        </div>

                        <div className="flex gap-1 items-center">
                            <div>
                                <span className="text-base text-gray-500">
                                    Sắp xếp:
                                </span>
                            </div>
                            <div className="flex items-center hover:cursor-pointer gap-1">
                                <span className="font-semibold hover:underline ">
                                    Đề xuất
                                </span>
                                <span>
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                        className="w-3"
                                    />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        {/* tieu de cua bo ket qua */}
                        <div className="mb-3">
                            <h4 className="text-xl font-bold">
                                Tất cả kết quả
                            </h4>
                        </div>
                        {/* Danh sách kết quả */}
                        <div className="w-full">
                            <ul>
                                <li className="h-[270px] p-[25px] flex align-middle rounded-t-md border-b hover:cursor-pointer hover:shadow-bound-box gap-[25px]">
                                    <div className="h-full">
                                        <img
                                            src="https://s3-media0.fl.yelpcdn.com/bphoto/J91eqhVOzLpuXJT_9mZzbw/l.jpg"
                                            alt="Mì cay Seoul Hàn Quốc"
                                            className="w-[210px] h-[210px]  rounded-md"
                                        />
                                    </div>

                                    <div className="h-full flex-wrap flex flex-1">
                                        <h2 className="text-2xl font-semibold w-full hover:underline">
                                            Mì cay Seoul
                                        </h2>
                                        <div className="flex items-center gap-1 w-full">
                                            <div className="flex">
                                                <span>
                                                    <FontAwesomeIcon
                                                        icon={faStarSolid}
                                                        className="w-[22px] h-[22px] text-yellow-400"
                                                    />
                                                </span>
                                                <span>
                                                    <FontAwesomeIcon
                                                        icon={faStarSolid}
                                                        className="w-[22px] h-[22px] text-yellow-400"
                                                    />
                                                </span>
                                                <span>
                                                    <FontAwesomeIcon
                                                        icon={faStarSolid}
                                                        className="w-[22px] h-[22px] text-yellow-400"
                                                    />
                                                </span>
                                                <span>
                                                    <FontAwesomeIcon
                                                        icon={faStarSolid}
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
                                            <div>
                                                <span className="text-gray-500 ">
                                                    45
                                                </span>
                                            </div>
                                        </div>
                                        {/* Cac tag danh muc */}
                                        <div className="w-full">
                                            <ul className="flex gap-2 mt-2">
                                                <li className="px-1 text-xs font-semibold text-gray-600 hover:bg-gray-300 bg-gray-200 rounded-sm hover:cursor-pointer">
                                                    <span>Mì hàn quốc</span>
                                                </li>
                                                <li className="px-1 text-xs font-semibold text-gray-600 hover:bg-gray-300 bg-gray-200 rounded-sm hover:cursor-pointer">
                                                    <span>Đồ cay</span>
                                                </li>
                                                <li className="px-1 text-xs font-semibold text-gray-600 hover:bg-gray-300 bg-gray-200 rounded-sm hover:cursor-pointer">
                                                    <span>Người Việt Nam</span>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Giờ làm việc */}
                                        <div className="flex gap-2 mt-3 w-full">
                                            <span>
                                                <span className="font-medium text-red-500">
                                                    Opened
                                                </span>{" "}
                                                at 6:00
                                            </span>
                                            <span>-</span>
                                            <span>
                                                <span className="font-medium text-red-500">
                                                    Closed
                                                </span>{" "}
                                                at 23:00
                                            </span>
                                        </div>
                                        {/* description about store */}
                                        <div className="flex gap-2 mt-3 w-full">
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faComment}
                                                    className="w-4"
                                                />
                                            </span>
                                            <span className="text-sm text-gray-400 line-clamp-2">
                                                <q className="line-clamp-2">
                                                    Mì Hải Sản là món BEST
                                                    SELLER của Hệ Thống Mì Cay
                                                    Seoul mà bạn không nên bỏ
                                                    lỡ. Sợi mì koreno dai ngon
                                                    kết hợp với nước dùng là
                                                    công thức độc quyền của
                                                    Seoul, chắc chắn sẽ đem đến
                                                    cho quý thực khách cảm giác
                                                    thơm ngon,đậm đà, khó cưỡng
                                                    nhất. Không chỉ là Mì Cay,
                                                    Lẩu Kim Chi cũng là lựa chọn
                                                    của rất nhiều thực khách khi
                                                    tới nhà hàng.
                                                </q>
                                            </span>
                                        </div>

                                        {/* Các loại hình thức phục vụ */}
                                        <div className="flex justify-between items-end w-full">
                                            <ul className="flex gap-5 align-middle">
                                                <li className="text-sm  font-medium flex gap-1">
                                                    <span className="flex ">
                                                        <FontAwesomeIcon
                                                            icon={faCheck}
                                                            className="w-3 text-red-400"
                                                        />
                                                    </span>
                                                    <span>
                                                        Phục vụ tại cửa hàng
                                                    </span>
                                                </li>
                                                <li className="text-sm  font-medium flex gap-1">
                                                    <span className="flex ">
                                                        <FontAwesomeIcon
                                                            icon={faCheck}
                                                            className="w-3 text-red-400"
                                                        />
                                                    </span>
                                                    <span>Giao hàng</span>
                                                </li>
                                                <li className="text-sm  font-medium flex gap-1">
                                                    <span className="flex ">
                                                        <FontAwesomeIcon
                                                            icon={faCheck}
                                                            className="w-3 text-red-400"
                                                        />
                                                    </span>
                                                    <span>Đặt trước</span>
                                                </li>
                                            </ul>
                                            <div>
                                                <button className="border border-gray-300 h-10 px-2 rounded hover:bg-gray-300">
                                                    <span className="font-medium">
                                                        Đặt hàng
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="h-[270px] p-[25px] flex align-middle rounded-t-md border-b hover:cursor-pointer hover:shadow-bound-box gap-[25px]">
                                    <div className="h-full">
                                        <img
                                            src="https://s3-media0.fl.yelpcdn.com/bphoto/J91eqhVOzLpuXJT_9mZzbw/l.jpg"
                                            alt="Mì cay Seoul Hàn Quốc"
                                            className="w-[210px] h-[210px]  rounded-md"
                                        />
                                    </div>

                                    <div className="h-full flex-wrap flex flex-1">
                                        <h2 className="text-2xl font-semibold w-full hover:underline">
                                            Mì cay Seoul
                                        </h2>
                                        <div className="flex items-center gap-1 w-full">
                                            <div className="flex">
                                                <span>
                                                    <FontAwesomeIcon
                                                        icon={faStarSolid}
                                                        className="w-[22px] h-[22px] text-yellow-400"
                                                    />
                                                </span>
                                                <span>
                                                    <FontAwesomeIcon
                                                        icon={faStarSolid}
                                                        className="w-[22px] h-[22px] text-yellow-400"
                                                    />
                                                </span>
                                                <span>
                                                    <FontAwesomeIcon
                                                        icon={faStarSolid}
                                                        className="w-[22px] h-[22px] text-yellow-400"
                                                    />
                                                </span>
                                                <span>
                                                    <FontAwesomeIcon
                                                        icon={faStarSolid}
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
                                            <div>
                                                <span className="text-gray-500 ">
                                                    45
                                                </span>
                                            </div>
                                        </div>
                                        {/* Cac tag danh muc */}
                                        <div className="w-full">
                                            <ul className="flex gap-2 mt-2">
                                                <li className="px-1 text-xs font-semibold text-gray-600 hover:bg-gray-300 bg-gray-200 rounded-sm hover:cursor-pointer">
                                                    <span>Mì hàn quốc</span>
                                                </li>
                                                <li className="px-1 text-xs font-semibold text-gray-600 hover:bg-gray-300 bg-gray-200 rounded-sm hover:cursor-pointer">
                                                    <span>Đồ cay</span>
                                                </li>
                                                <li className="px-1 text-xs font-semibold text-gray-600 hover:bg-gray-300 bg-gray-200 rounded-sm hover:cursor-pointer">
                                                    <span>Người Việt Nam</span>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Giờ làm việc */}
                                        <div className="flex gap-2 mt-3 w-full">
                                            <span>
                                                <span className="font-medium text-red-500">
                                                    Opened
                                                </span>{" "}
                                                at 6:00
                                            </span>
                                            <span>-</span>
                                            <span>
                                                <span className="font-medium text-red-500">
                                                    Closed
                                                </span>{" "}
                                                at 23:00
                                            </span>
                                        </div>
                                        {/* description about store */}
                                        <div className="flex gap-2 mt-3 w-full">
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faComment}
                                                    className="w-4"
                                                />
                                            </span>
                                            <span className="text-sm text-gray-400 line-clamp-2">
                                                <q className="line-clamp-2">
                                                    Mì Hải Sản là món BEST
                                                    SELLER của Hệ Thống Mì Cay
                                                    Seoul mà bạn không nên bỏ
                                                    lỡ. Sợi mì koreno dai ngon
                                                    kết hợp với nước dùng là
                                                    công thức độc quyền của
                                                    Seoul, chắc chắn sẽ đem đến
                                                    cho quý thực khách cảm giác
                                                    thơm ngon,đậm đà, khó cưỡng
                                                    nhất. Không chỉ là Mì Cay,
                                                    Lẩu Kim Chi cũng là lựa chọn
                                                    của rất nhiều thực khách khi
                                                    tới nhà hàng.
                                                </q>
                                            </span>
                                        </div>

                                        {/* Các loại hình thức phục vụ */}
                                        <div className="flex justify-between items-end w-full">
                                            <ul className="flex gap-5 align-middle">
                                                <li className="text-sm  font-medium flex gap-1">
                                                    <span className="flex ">
                                                        <FontAwesomeIcon
                                                            icon={faCheck}
                                                            className="w-3 text-red-400"
                                                        />
                                                    </span>
                                                    <span>
                                                        Phục vụ tại cửa hàng
                                                    </span>
                                                </li>
                                                <li className="text-sm  font-medium flex gap-1">
                                                    <span className="flex ">
                                                        <FontAwesomeIcon
                                                            icon={faCheck}
                                                            className="w-3 text-red-400"
                                                        />
                                                    </span>
                                                    <span>Giao hàng</span>
                                                </li>
                                                <li className="text-sm  font-medium flex gap-1">
                                                    <span className="flex ">
                                                        <FontAwesomeIcon
                                                            icon={faCheck}
                                                            className="w-3 text-red-400"
                                                        />
                                                    </span>
                                                    <span>Đặt trước</span>
                                                </li>
                                            </ul>
                                            <div>
                                                <button className="border border-gray-300 h-10 px-2 rounded hover:bg-gray-300">
                                                    <span className="font-medium">
                                                        Đặt hàng
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="h-[270px] p-[25px] flex align-middle rounded-t-md border-b hover:cursor-pointer hover:shadow-bound-box gap-[25px]">
                                    <div className="h-full">
                                        <img
                                            src="https://s3-media0.fl.yelpcdn.com/bphoto/J91eqhVOzLpuXJT_9mZzbw/l.jpg"
                                            alt="Mì cay Seoul Hàn Quốc"
                                            className="w-[210px] h-[210px]  rounded-md"
                                        />
                                    </div>

                                    <div className="h-full flex-wrap flex flex-1">
                                        <h2 className="text-2xl font-semibold w-full hover:underline">
                                            Mì cay Seoul
                                        </h2>
                                        <div className="flex items-center gap-1 w-full">
                                            <div className="flex">
                                                <span>
                                                    <FontAwesomeIcon
                                                        icon={faStarSolid}
                                                        className="w-[22px] h-[22px] text-yellow-400"
                                                    />
                                                </span>
                                                <span>
                                                    <FontAwesomeIcon
                                                        icon={faStarSolid}
                                                        className="w-[22px] h-[22px] text-yellow-400"
                                                    />
                                                </span>
                                                <span>
                                                    <FontAwesomeIcon
                                                        icon={faStarSolid}
                                                        className="w-[22px] h-[22px] text-yellow-400"
                                                    />
                                                </span>
                                                <span>
                                                    <FontAwesomeIcon
                                                        icon={faStarSolid}
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
                                            <div>
                                                <span className="text-gray-500 ">
                                                    45
                                                </span>
                                            </div>
                                        </div>
                                        {/* Cac tag danh muc */}
                                        <div className="w-full">
                                            <ul className="flex gap-2 mt-2">
                                                <li className="px-1 text-xs font-semibold text-gray-600 hover:bg-gray-300 bg-gray-200 rounded-sm hover:cursor-pointer">
                                                    <span>Mì hàn quốc</span>
                                                </li>
                                                <li className="px-1 text-xs font-semibold text-gray-600 hover:bg-gray-300 bg-gray-200 rounded-sm hover:cursor-pointer">
                                                    <span>Đồ cay</span>
                                                </li>
                                                <li className="px-1 text-xs font-semibold text-gray-600 hover:bg-gray-300 bg-gray-200 rounded-sm hover:cursor-pointer">
                                                    <span>Người Việt Nam</span>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Giờ làm việc */}
                                        <div className="flex gap-2 mt-3 w-full">
                                            <span>
                                                <span className="font-medium text-red-500">
                                                    Opened
                                                </span>{" "}
                                                at 6:00
                                            </span>
                                            <span>-</span>
                                            <span>
                                                <span className="font-medium text-red-500">
                                                    Closed
                                                </span>{" "}
                                                at 23:00
                                            </span>
                                        </div>
                                        {/* description about store */}
                                        <div className="flex gap-2 mt-3 w-full">
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faComment}
                                                    className="w-4"
                                                />
                                            </span>
                                            <span className="text-sm text-gray-400 line-clamp-2">
                                                <q className="line-clamp-2">
                                                    Mì Hải Sản là món BEST
                                                    SELLER của Hệ Thống Mì Cay
                                                    Seoul mà bạn không nên bỏ
                                                    lỡ. Sợi mì koreno dai ngon
                                                    kết hợp với nước dùng là
                                                    công thức độc quyền của
                                                    Seoul, chắc chắn sẽ đem đến
                                                    cho quý thực khách cảm giác
                                                    thơm ngon,đậm đà, khó cưỡng
                                                    nhất. Không chỉ là Mì Cay,
                                                    Lẩu Kim Chi cũng là lựa chọn
                                                    của rất nhiều thực khách khi
                                                    tới nhà hàng.
                                                </q>
                                            </span>
                                        </div>

                                        {/* Các loại hình thức phục vụ */}
                                        <div className="flex justify-between items-end w-full">
                                            <ul className="flex gap-5 align-middle">
                                                <li className="text-sm  font-medium flex gap-1">
                                                    <span className="flex ">
                                                        <FontAwesomeIcon
                                                            icon={faCheck}
                                                            className="w-3 text-red-400"
                                                        />
                                                    </span>
                                                    <span>
                                                        Phục vụ tại cửa hàng
                                                    </span>
                                                </li>
                                                <li className="text-sm  font-medium flex gap-1">
                                                    <span className="flex ">
                                                        <FontAwesomeIcon
                                                            icon={faCheck}
                                                            className="w-3 text-red-400"
                                                        />
                                                    </span>
                                                    <span>Giao hàng</span>
                                                </li>
                                                <li className="text-sm  font-medium flex gap-1">
                                                    <span className="flex ">
                                                        <FontAwesomeIcon
                                                            icon={faCheck}
                                                            className="w-3 text-red-400"
                                                        />
                                                    </span>
                                                    <span>Đặt trước</span>
                                                </li>
                                            </ul>
                                            <div>
                                                <button className="border border-gray-300 h-10 px-2 rounded hover:bg-gray-300">
                                                    <span className="font-medium">
                                                        Đặt hàng
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="w-full bg-slate-500">
                    <Map />
                </div>
            </div>
        </div>
    );
}
