import { useEffect } from 'react';
import { Header, Footer } from '@monorepo-poc/shared-components';
import { GET } from '@monorepo-poc/http-client';
import fetch from 'isomorphic-fetch';

import React from 'react';
export const Index = () => {
  useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/todos/1')
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
