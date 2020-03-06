import { useEffect } from 'react';
import { Header, Footer } from '@monorepo-poc/shared-components';
import { GET } from '@monorepo-poc/http-client';

import React from 'react';
export const Index = () => {
  useEffect(() => {
    GET('fetch data');
  }, []);

  return (
    <>
      <Header />
      <div>the rest of the component</div>
      <Footer />
    </>
  );
};
export default Index;
