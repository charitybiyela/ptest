import React from 'react';

export default function Background() {
  return (
    <>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-100/50 to-purple-100/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-100/50 to-indigo-100/50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
    </>
  );
}