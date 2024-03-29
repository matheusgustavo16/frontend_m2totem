"use client";

import { useEffect, useState } from "react";

export function CountdownComponentCocaCola({
  seconds,
  onFinish
}: {
  seconds: number | null;
  onFinish: () => void;
}) {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    if (seconds && !timeLeft) setTimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    if (timeLeft === 0) {
      // console.log("TIME LEFT IS 0");
      onFinish();
      setTimeLeft(null);
    }
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <>
      <span className="text-[15em] select-none font-[TCCCHolidays23Curated]">
        {timeLeft}
      </span>
    </>
  );
}

export function CountdownComponentGarnier({
  seconds,
  onFinish
}: {
  seconds: number | null;
  onFinish: () => void;
}) {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    if (seconds && !timeLeft) setTimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    if (timeLeft === 0) {
      // console.log("TIME LEFT IS 0");
      onFinish();
      setTimeLeft(null);
    }
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <>
      <span className="text-[16em] text-[#ca5224] select-none font-[Gotham] font-bold">
        {timeLeft}
      </span>
    </>
  );
}

export default function CountdownComponent({
  seconds,
  onFinish
}: {
  seconds: number | null;
  onFinish: () => void;
}) {
  const [timeLeft, setTimeLeft] = useState<number | any>(null);

  useEffect(() => {
    if (seconds && !timeLeft) setTimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    if (timeLeft === 0) {
      console.log("TIME LEFT IS 0");
      onFinish();
      setTimeLeft(null);
    }
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <>
      <span className="text-9xl pt-16 select-none font-extrabold">
        {timeLeft}
      </span>
    </>
  );
}
