import PinInput from "react-pin-input";
import React, { useState } from "react";
import { Loader2 } from "lucide-react";

export default function LoginAccauntForm() {
  const [error, setError] = useState(false);
  const [pin, setPin] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (value: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    console.log(value);
  };

  return (
    <>
      <h1 className="text-gray-400 font-bold text-[16px] mb-4">
        Profile Lock is currently On
      </h1>
      {error ? (
        <h2 className="text-red-500 text-center font-bold text-[20px]">
          Whoops, wrong PIN. Please try again
        </h2>
      ) : (
        <h2 className="text-white text-center font-bold text-[20px]">
          Enter your PIN to access this profile
        </h2>
      )}
      <div className="flex items-center justify-center">
        <PinInput
          length={4}
          initialValue={pin}
          secret
          secretDelay={100}
          onChange={(value) => setPin(value)}
          type={"numeric"}
          inputMode={"number"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
          inputStyle={{
            borderColor: "RGBA(255, 255, 255, 0.16)",
            height: "56px",
            width: "100%",
            fontSize: "40px",
          }}
          disabled={isLoading}
          inputFocusStyle={{ borderColor: "wheat" }}
          onComplete={(value) => onSubmit(value)}
          autoSelect={true}
        />
        {isLoading && <Loader2 className={"animate-spin"} />}
      </div>
    </>
  );
}
