import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function Cover() {
  return (
    <div className='cover-page'>
      <div
        className={styles.cover}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '770px',
          width: '524px',
          fontSize: '20px',
          backgroundImage: `url("/img/cover-background.png")`
          // border: '1px solid #000',
        }}>
        <h1>
          Java 모니터링
        </h1>
        <p className={styles.date}>
            WhaTap Docs 2024.04.02
        </p>
      </div>
      <a class="pagination-nav__link pagination-nav__link--next" href="/whatap-docs/best-practice-guides/about-apm-hitmap-class"><div class="pagination-nav__sublabel">다음</div><div class="pagination-nav__label">히트맵 트랜잭션 살펴보기</div></a>
      <div class="page-break"></div>
    </div>
  );
}