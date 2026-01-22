import { useEffect, useState } from "react";

// CONFIGURACIÓN: Edita esta fecha para cambiar la cuenta atrás
// Formato: "YYYY-MM-DD HH:mm:ss" (hora en formato 24h)
// Nota: Esta fecha está en hora española (CET/CEST)
const TARGET_DATE = "2026-03-01 19:00:00";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(TARGET_DATE) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-primary text-primary-foreground rounded-lg p-4 md:p-6 min-w-[70px] md:min-w-[90px]">
        <span className="text-3xl md:text-5xl font-bold tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-sm md:text-base text-muted-foreground mt-2 font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <div className="bg-card border border-border rounded-lg p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-bold text-center mb-6 text-foreground">
        El evento comienza en:
      </h3>
      <div className="flex justify-center gap-3 md:gap-6">
        <TimeBox value={timeLeft.days} label="Días" />
        <TimeBox value={timeLeft.hours} label="Horas" />
        <TimeBox value={timeLeft.minutes} label="Minutos" />
        <TimeBox value={timeLeft.seconds} label="Segundos" />
      </div>
    </div>
  );
};

export default CountdownTimer;
