import React from "react";

export interface Props {
  children: React.ReactNode;
  className?: string;
  variant?:
    | "primary"
    | "outline"
    | "danger"
    | "outline-danger"
    | "warning"
    | "outline-warning"
    | "success"
    | "outline-success";
  size?: "sm" | "md" | "lg";
  fullwidth?: boolean;
  onClick?: () => void;
}
