export interface Toast {
  id: number;
  message: string;
  type: "success" | "error" | "info";
}
export interface ToasterProps {
  toasts: Toast[];
  removeToast: (id: number) => void;
}
