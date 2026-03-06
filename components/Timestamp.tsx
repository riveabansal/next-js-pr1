"use client";

import { useEffect, useState } from "react";
import { getTimeStamp } from "@/lib/utils";

const TimeStamp = ({ createdAt }: { createdAt: Date | string }) => {
  const [time, setTime] = useState(getTimeStamp(new Date(createdAt)));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeStamp(new Date(createdAt)));
    }, 60000);

    return () => clearInterval(interval);
  }, [createdAt]);

  return <>{time}</>;
};

export default TimeStamp;
