import React from 'react';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  size = 'medium',
  className = '',
}) => {
  const sizeClasses = {
    small: 'loader-sm',
    medium: 'loader-md',
    large: 'loader-lg',
  };

  const classes = ['loader', sizeClasses[size], className]
    .filter(Boolean)
    .join(' ');

  return <div className={classes} />;
};
