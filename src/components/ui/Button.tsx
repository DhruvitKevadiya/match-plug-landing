import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  onClick,
  href,
  disabled = false,
  className = "",
}) => {
  // Base classes
  const baseClasses = `
    font-semibold rounded-full transition-all duration-300 transform 
    hover:scale-105 inline-flex items-center justify-center
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `;

  // Size variants
  const sizeClasses = {
    sm: "py-2 px-4 text-sm min-w-[160px]",
    md: "py-2 px-5 sm:text-lg min-w-[220px]",
    lg: "py-4 px-12 text-xl min-w-[240px]",
  };

  // Style variants
  const variantClasses = {
    primary: `
      bg-white hover:bg-gray-100 text-black hover:shadow-2xl
      focus:ring-gray-500
    `,
    secondary: `
      border-2 border-white/60 hover:border-white text-white 
      hover:text-white hover:bg-white/10 backdrop-blur-sm
      focus:ring-white/50
    `,
  };

  // Width classes
  const widthClasses = fullWidth ? "w-full" : "w-full sm:w-auto";

  // Combine all classes
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${widthClasses}
    ${className}
  `
    .replace(/\s+/g, " ")
    .trim();

  // If href is provided, render as Link (Next.js)
  if (href && !disabled) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  // Regular button
  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
