import RootLayout from '@/Layouts/RootLayout';
import React from 'react';

const BuildPC = () => {
    return (
        <div>
            
        </div>
    );
};

export default BuildPC;

BuildPC.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};