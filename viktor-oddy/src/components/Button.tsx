import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyles = 'rounded-full px-7 py-3 transition-all duration-300 font-medium text-sm md:text-base cursor-pointer';
  
  const variants = {
    primary: 'bg-[#051A24] text-white shadow-primary hover:bg-[#0D212C]',
    secondary: 'bg-white text-[#051A24] shadow-secondary hover:opacity-90',
    tertiary: 'bg-white text-[#051A24] shadow-card-light hover:shadow-secondary',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
