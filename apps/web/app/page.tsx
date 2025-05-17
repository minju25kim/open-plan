'use client'

import type { JSX } from 'react';
import { Button } from '@repo/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home(): JSX.Element {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://picsum.photos/id/0/info');
      const data = await res.json();
      router.push(`/result?author=${encodeURIComponent(data.author)}&url=${encodeURIComponent(data.url)}&download_url=${encodeURIComponent(data.download_url)}`);
    } catch {
      alert('API 요청에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100vw',
        maxWidth: 375,
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div
        style={{
          width: '100%',
          padding: '17px 20px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            fontFamily: 'Pretendard, sans-serif',
            fontWeight: 500,
            fontSize: 15,
            lineHeight: 1.4,
            letterSpacing: '-0.02em',
            color: '#1A1A1A',
            textAlign: 'center',
          }}
        >
          김민주
        </div>
      </div>

      {/* Greeting and Button Section */}
      <div
        style={{
          width: '100%',
          padding: '40px 20px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'Pretendard, sans-serif',
            fontWeight: 600,
            fontSize: 28,
            lineHeight: 1.4,
            letterSpacing: '-0.02em',
            color: '#111',
            textAlign: 'center',
          }}
        >
          안녕하세요<br />김민주입니다.
        </h1>
      </div>
      <Button style={{ width: 335 ,margin: '20px 40px'}} onClick={handleClick} disabled={loading}>
        {loading ? '로딩 중...' : '다음'}
      </Button>
    </div>
  );
}
