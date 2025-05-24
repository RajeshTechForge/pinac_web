import { useEffect } from "react";

interface NotificationProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Notification = ({ message, type, onClose }: NotificationProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`
        fixed top-5 right-5 
        py-4 px-6 
        rounded-lg 
        font-Poppins text-sm
        z-50
        animate-slideIn
        ${type === "success" ? "bg-emerald-500" : "bg-rose-600"}
        text-white
      `}
    >
      {message}
    </div>
  );
};

export default Notification;
