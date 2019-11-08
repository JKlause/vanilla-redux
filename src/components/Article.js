import React from 'react';
import { useStoreState } from '../store';

const Article = () => {
  const state = useStoreState();

  return (
    <article>
      <header>
        <h2>{'Ryan\'s cool Article'}</h2>
      </header>
      <section>
        <p>Such a cool thing right? {state.count}</p>
      </section>
    </article>
  );
};

export default Article;
