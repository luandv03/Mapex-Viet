import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export const metadata: Metadata = {
    title: "Login",
};

export default function Login() {
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Đăng nhập tài khoản với MapexViet
                </h2>
            </div>

            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                <div>
                    <button className="w-full gap-x-1  text-center items-center justify-center flex text-white rounded-md  bg-indigo-600 h-12 hover:opacity-80">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            width="30px"
                            height="30px"
                        >
                            <linearGradient
                                id="Ld6sqrtcxMyckEl6xeDdMa"
                                x1="9.993"
                                x2="40.615"
                                y1="9.993"
                                y2="40.615"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0" stop-color="#2aa4f4" />
                                <stop offset="1" stop-color="#007ad9" />
                            </linearGradient>
                            <path
                                fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                            />
                            <path
                                fill="#fff"
                                d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                            />
                        </svg>
                        <span>Đăng nhập với Facebook</span>
                    </button>
                    <button className="w-full gap-x-1  text-center items-center justify-center flex rounded-md bg-stone-200 h-12 mt-2 hover:opacity-80">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            width="30px"
                            height="30px"
                        >
                            <path
                                fill="#fbc02d"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.905,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                            />
                            <path
                                fill="#e53935"
                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                            />
                            <path
                                fill="#4caf50"
                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                            />
                            <path
                                fill="#1565c0"
                                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                            />
                        </svg>
                        <span>Đăng nhập với Google</span>
                    </button>
                </div>

                <fieldset className="border-b my-6 w-full text-center ">
                    <span className="text-base text-gray-500 px-4">Hoặc</span>
                </fieldset>

                <form className="space-y-2 mt-4" action="#" method="POST">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Email
                        </label>
                        <div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="mapexviet@gmail.com"
                                required
                                className="pl-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Mật khẩu
                            </label>
                            <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                                >
                                    Quên mật khẩu?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2 relative">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="mapexviet@"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-1"
                            />
                            <div className="text-gray-500 w-5 absolute top-0 right-3 translate-y-1/2 hover:cursor-pointer">
                                <FontAwesomeIcon icon={faEye} size="sm" />
                            </div>
                            {/* <div className="text-gray-500 w-5 absolute top-0 right-3 translate-y-1/2 hover:cursor-pointer">
                                <FontAwesomeIcon icon={faEyeSlash} size="sm" />
                            </div> */}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-zinc-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Đăng nhập
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Bạn có tài khoản chưa?
                    <Link
                        href="/dashboard/register"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1"
                    >
                        Đăng ký
                    </Link>
                </p>
            </div>
        </div>
    );
}
