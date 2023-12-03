import avatar from "@/app/img/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg";
import { toast } from "@/components/ui/use-toast";
import { AccountProps, AccountResponse } from "@/types";
import { Dialog } from "@radix-ui/react-dialog";
import axios from "axios";
import { LockKeyhole, Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import CreateAccountForm from "../form/CreateAccountForm";
import LoginAccountForm from "../form/LoginAccountForm";
import { Button } from "../ui/button";
import { DialogContent } from "../ui/dialog";
import { Skeleton } from "../ui/skeleton";

export default function ManageAccount() {
  const [isDelete, setIsDelete] = useState<Boolean>(false);
  const [open, setOpen] = useState<Boolean>(false);
  const [state, setState] = useState<"login" | "create">("create");
  const [accounts, setAccounts] = useState<AccountProps[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true)

  const { data: session }: any = useSession();

  useEffect(() => {
    const getAllAccounts = async () => {
      try {
        const { data } = await axios.get<AccountResponse>(
          `/api/account?uid=${session.user.uid}`
        );
        data.success && setAccounts(data.data);
        console.log(data);
      } catch (error) {
        return toast({
          title: "error",
          description: "An error occurred",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false)
      }
    };

    getAllAccounts();
  }, [session]);

  const onDelete = async (id: string) => {
    try {
      const isConfirmed = confirm(
        "Are you sure you want to delete this account?"
      );
      if (isConfirmed) {
        const { data } = await axios.delete<AccountResponse>(
          `/api/account?id=${id}`
        );
        if (data.success) {
          setAccounts(accounts.filter((account) => account._id !== id));
          return toast({
            title: "Success",
            description: "Account deleted successfully",
          });
        } else {
          return toast({
            title: "Error",
            description: data.message,
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      return toast({
        title: "Error",
        description: "Error deleting",
        variant: "destructive",
      });
    }
  };

  return (
    <div
      className={
        "min-h-screen flex justify-center  flex-col items-center relative"
      }
    >
      <div className={"flex justify-center flex-col items-center"}>
        <h1 className={"text-white font-bold text-5xl my-12"}>
          Who's Watching?
        </h1>
        <ul className={"flex p-0 my-12 gap-3"}>
          {isLoading ? (
            [1, 2, 3, 4].map((_, i) => (
              <Skeleton className={"max-w-[200px] h-[155px] w-[155px] cursor-pointer flex flex-col items-center gap-3 min-w-[]200px  "} />
            ))
          ) : (
            <>
              { accounts && accounts.map((account) => (
                <li
                  key={account._id}
                  onClick={() => {
                    if (isDelete) return;
                    setOpen(true);
                    setState("login");
                  }}
                  className={
                    "max-w-[200px] w-[155px] cursor-pointer155px flex flex-col items-center gap-3 min-w-[200px]"
                  }
                >
                  <div className={"relative"}>
                    <div
                      className={
                        "max-w-[200px] rounded min-w-[84px] max-h-[200px] min-h-[84px] object-cover w-[155px] h-[155px] relative"
                      }
                    >
                      <Image src={avatar} alt="Avatar Icon" fill />
                    </div>
                    {isDelete && (
                      <div
                        onClick={() => onDelete(account._id)}
                        className={
                          "absolute transform bottom-0 z-10 cursor-pointer"
                        }
                      >
                        <Trash2 className={"h-7 w-7 text-red-600"} />
                      </div>
                    )}
                  </div>
                  <div className={"flex items-center  gap-2"}>
                    <span className={"font-bold font-mono text-xl"}>
                      {account.name}
                    </span>
                    <LockKeyhole />
                  </div>
                </li>
              ))}

              {accounts && accounts.length < 4 && (
                <li
                  onClick={() => {
                    setOpen(true);
                    setState("create");
                  }}
                  className={
                    "border  bg-[#e5b109] font-bold text-xl border-black max-w-[200px] rounded min-w-[84px] max-h-[200px] min-h-[84px] w-[155px] h-[155px] cursor-pointer flex justify-center items-center"
                  }
                >
                  Add accaunt
                </li>
              )}
            </>
          )

          }
        </ul>
        <Button
          onClick={() => setIsDelete((prev) => !prev)}
          className={
            "bg-transparent rounded-none hover:bg-transparent !text-white border border-gray-100 cursor-pointer tracking-wide inline-flex text-sm px-[1.5em] py-[0.5em]"
          }
        >
          Manage Profile
        </Button>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            {state === "login" && <LoginAccountForm />}
            {state === "create" && (
              <CreateAccountForm
                uid={session?.user?.uid}
                setOpen={setOpen}
                setAccounts={setAccounts}
                accounts={setAccounts}
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
