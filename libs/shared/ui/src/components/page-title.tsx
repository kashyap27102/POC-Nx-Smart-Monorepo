import React from 'react';

interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }: PageTitleProps) {
  return <h1 className="text-6xl font-semibold text-gray-500">{title}</h1>;
}

export default PageTitle;
