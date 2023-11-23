import Account from "@/database/Account";
import { connectToDatabase } from "@/lib/mongoose";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { name, pin, uid } = await req.json();

    const isExist = await Account.findOne({ name });
    const allAccount = await Account.find({ uid });

    if (isExist) {
      return NextResponse.json({
        success: false,
        message: "You already  have an account",
      });
    }

    if (allAccount && allAccount.length === 4) {
      return NextResponse.json({
        success: false,
        message: "You can only have 4 accounts",
      });
    }

    const hashPin = await  hash(pin,10);

    const account = await Account.create({ name, pin, hashPin,  uid });

    return NextResponse.json({ account });
  } catch (e) {
    return NextResponse.json({ success: false, message: "Hello, world!" });
  }
}
