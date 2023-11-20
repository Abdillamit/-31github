import bg from "@/app/img/NL-en-20231113-popsignuptwoweeks-perspective_alpha_website_medium.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

export default function login() {
  return (
    <div className={"w-full h-screen"}>
      <div className={"absolute inset-0"}>
        <Image fill src={bg} alt="bg" />
      </div>
      <div
        className={
          "relative rounded-md z-10 w-[550px] bg-black/60 h-[50vh]  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-4"
        }
      >
        <div className={"flex h-full items-center justify-center flex-col "}>
          <h1 className={"text-4xl font-bold"}>Login</h1>
          <Button
            className={
              "mt-4 flex items-center gap-2 w-full h-[56px] bg-red-600  !text-white hover:bg-red-500"
            }
          >
            <AiFillGithub className={"w-7 h-7"} />
            Sign in with Github
          </Button>
        </div>
      </div>
    </div>
  );
}
