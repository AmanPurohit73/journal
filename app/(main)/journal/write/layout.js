import Link from "next/link";
import React, { Suspense } from "react";
import {BarLoader} from "react-spinners"

const WriteLayout = ({ children }) => {
  return (
    <div className="container mx-auto px-20 py-8">
      <div>
        <Link
          href="/dashboard"
          className=" text-orange-600 hover:text-orange-700 cursor-pointer text-xl"
        >
          Back to Dashboard
        </Link>
      </div>
      <Suspense fallback={<BarLoader color="orange" width="100%"/>}>{children}</Suspense>
    </div>
  );
};

export default WriteLayout;
