import React from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoadingLogin() {
    return (
        <main className="w-full h-screen">
            <div className="bg-slate-400 w-full h-full flex justify-center align-middle pt-3">
                <div className="w-10">
                    <span>
                        <FontAwesomeIcon
                            icon={faSpinner}
                            className="w-8 h-8 text-red-500 animate-spin-slow"
                        />
                    </span>
                </div>
            </div>
        </main>
    );
}
